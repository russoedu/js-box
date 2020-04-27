import express from 'express'
import checkAPIs from 'express-validator'
import morgan from 'morgan'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import autoBind from 'auto-bind'

import './database.js'
import routes from './routes.js'

dotenv.config()

const server = express()

class AppController {
  constructor () {
    this.port = 4000
    this.logPath = path.join(path.resolve(), `../logs/api-${process.env.JS_BOX_ENVIRONMENT}-access.log`)
    autoBind(this)

    this.config()
    this.secure()
    this.setRoutes()
  }

  config () {
    const accessLogStream = fs.createWriteStream(this.logPath, { flags: 'a' })

    server.use(morgan('combined', { stream: accessLogStream }))
    server.use(express.json())
  }

  secure () {
    server.use(helmet())
  }

  setRoutes () {
    const { check } = checkAPIs
    const validationAndSanitization = check('desc').isLength({ min: 1 }).trim().escape()
    const options = {
      get: [],
      update: [validationAndSanitization],
      delete: [],
      add: [validationAndSanitization],
      all: []
    }
    routes(server, options)
  }

  start () {
    server.listen(this.port, () => {
      const url = `${process.env.JS_BOX_ACCESS_PROTOCOL}://${process.env.JS_BOX_ACCESS_HOST}:${process.env.JS_BOX_ACCESS_PORT}/api/`
      console.log('API running, listening externally on:', url)
      console.log('API logs streaming on:', this.logPath)
    })
  }
}

export default AppController

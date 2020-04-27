import express from 'express'
import cookieParser from 'cookie-parser'
import checkAPIs from 'express-validator'
import morgan from 'morgan'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import autoBind from 'auto-bind'
import './database.js'
import routes from './routes.js'
// import csrf from 'csurf'

dotenv.config()

const { check } = checkAPIs
const __dirname = path.resolve()
const app = express()

class AppController {
  constructor () {
    this.port = 4000
    this.logPath = path.join(__dirname, `../logs/api-${process.env.JS_BOX_ENVIRONMENT}-access.log`)
    autoBind(this)
    this.config()
    this.secure()
    this.setRoutes()
  }

  config () {
    const accessLogStream = fs.createWriteStream(this.logPath, { flags: 'a' })

    app.use(morgan('combined', { stream: accessLogStream }))
    app.use(express.json())
  }

  secure () {
    app.use(helmet())
    app.use(cookieParser())
    // app.use(csrf())
  }

  setRoutes () {
    // const csrfProtection = csrf({ cookie: true })
    const validationAndSanitization = [check('desc').isLength({ min: 1 }).trim().escape()]
    routes(app, validationAndSanitization)
  }

  start () {
    app.listen(this.port, () => {
      const url = `${process.env.JS_BOX_ACCESS_PROTOCOL}://${process.env.JS_BOX_ACCESS_HOST}:${process.env.JS_BOX_ACCESS_PORT}/api/`
      console.log('API running, listening externally on:', url)
      console.log('API logs streaming on:', this.logPath)
    })
  }
}

export default AppController

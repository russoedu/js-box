import cookieParser from 'cookie-parser'
// import csrf from 'csurf'
import morgan from 'morgan'
// import check from 'express-validator'
import checkAPIs from 'express-validator'
// import filterAPIs from 'express-validator/filter'
import helmet from 'helmet'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import TodoListController from './TodoListController.js'

// const { matchedData, sanitize } = filterAPIs
const { check } = checkAPIs
const __dirname = path.resolve()

dotenv.config()

class AppController {
  /**
   *
   * @param {Express} express
   * @param {Express} app
   */
  static init (express, app) {
    const port = 4000
    const logPath = path.join(__dirname, `../logs/api-${process.env.JS_BOX_ENVIRONMENT}-access.log`)

    AppController.config(express, app, logPath)
    AppController.secure(app)

    AppController.setRoutes(app)
    AppController.startServer(app, port, logPath)
  }

  /**
   *
   * @param {Express} express
   * @param {Express} app
   */
  static config (express, app, logPath) {
    const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' })

    app.use(morgan('combined', { stream: accessLogStream }))
    app.use(express.json())
  }

  /**
   *
   * @param {Express} app
   */
  static secure (app) {
    app.use(helmet())
    app.use(cookieParser())
    // app.use(csrf())
  }

  /**
   *
   * @param {Express} app
   */
  static setRoutes (app) {
    TodoListController.init()

    const validationAndSanitization = [check('desc').isLength({ min: 1 }).trim().escape()]
    // const csrfProtection = csrf({ cookie: true })

    app.get('/:id', TodoListController.get)
    app.put('/:id', validationAndSanitization, TodoListController.update)
    app.delete('/:id', TodoListController.delete)
    app.post('/', validationAndSanitization, TodoListController.add)
    app.get('/', TodoListController.all)
  }

  static startServer (app, port, logPath) {
    app.listen(port, () => {
      const url = `${process.env.JS_BOX_ACCESS_PROTOCOL}://${process.env.JS_BOX_ACCESS_HOST}:${process.env.JS_BOX_ACCESS_PORT}/api/`
      console.log('API running, listening externally on:', url)
      console.log('API logs streaming on:', logPath)
    })
  }
}

export default AppController

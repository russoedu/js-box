const morgan = require('morgan')
const helmet = require('helmet')
const fs = require('fs')
const path = require('path')

require('dotenv').config()

const TodoListController = require('./TodoListController')

class AppController {
  static init (express, app) {
    const port = 4000
    const logPath = path.join(__dirname, `../../../logs/api-${process.env.JS_BOX_ENVIRONMENT}-access.log`)

    AppController.config(express, app, logPath)
    AppController.setRoutes(app)
    AppController.startServer(app, port, logPath)
  }

  static config (express, app, logPath) {
    const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' })

    app.use(morgan('combined', { stream: accessLogStream }))
    app.use(express.json())
    app.use(helmet())
  }

  static setRoutes (app) {
    TodoListController.init()

    app.get('/:id', TodoListController.get)
    app.put('/:id', TodoListController.update)
    app.delete('/:id', TodoListController.delete)
    app.post('/', TodoListController.add)
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

module.exports = AppController

import AppController from './config/server.js'
import './config/database.js'

const server = new AppController()
server.start()

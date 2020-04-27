import TodoListController from '../src/controllers/TodoListController.js'

/**
 * Routes class
 */
class Routes {
  /**
   * Set the server routes
   * @param {Express} server The express server
   * @param {Object} options The option for each route
   */
  static setRoutes (server, options) {
    server.get('/:id', options.get, TodoListController.get)
    server.put('/:id', options.update, TodoListController.update)
    server.delete('/:id', options.delete, TodoListController.delete)
    server.post('/', options.add, TodoListController.add)
    server.get('/', options.all, TodoListController.all)
  }
}

export default Routes.setRoutes

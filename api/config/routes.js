import TodoListController from '../src/controllers/TodoListController.js'

export default (server, validationAndSanitization) => {
  server.get('/:id', TodoListController.get)
  server.put('/:id', validationAndSanitization, TodoListController.update)
  server.delete('/:id', TodoListController.delete)
  server.post('/', validationAndSanitization, TodoListController.add)
  server.get('/', TodoListController.all)

}

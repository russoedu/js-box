import Controller from './Controller.js'
import TodoListModel from '../models/TodoListModel.js'
import TodoListService from '../services/TodoListService.js'

const todoListService = new TodoListService(TodoListModel)

class TodoListController extends Controller {
}

export default new TodoListController(todoListService)

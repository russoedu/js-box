import React, { Component } from 'react';
import TodoService from './TodoService';
import TodoForm from './TodoForm';

export default class UpdateTodo extends Component {

  constructor(props) {
      super(props);
      this.todoService = new TodoService();

      //bind the instance to each method
      // (So you can use the THIS statement. Otherwise, it will be null)
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);

      //set the initial state
      this.state = {
        _id: '',
        desc: ''
      };
  }

  componentDidMount(){
    //the parameter ID
    let id =this.props.match.params.id;
    var thisRef = this;
    this.todoService.get(id, function(data){
      thisRef.setState(data);
    });
  }

  handleChange(event) {
    //updates the state only for this parameter
    //(_id stays the same)
    this.setState({desc: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //reference to the component "this"
    var thisRef = this;
    //Update in database
    this.todoService.update(
      this.state.desc,
      this.state._id,
      function() {
        thisRef.props.history.push('/');
      }
    );
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <TodoForm
        task="Edit Task"
        action="Update"
        onSubmit={this.handleSubmit}
        hidden={this.state._id}
        text={this.state.desc}
        onChange={this.handleChange}
        cancel={this.handleCancel}
      />
    );
  }
}

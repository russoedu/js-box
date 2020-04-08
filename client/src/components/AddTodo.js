import React, { Component } from 'react';
import TodoService from './TodoService';
import TodoForm from './TodoForm';

export default class AddTodo extends Component {

  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.todoService = new TodoService();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      this.todoService.add(this.state.value,()=>{
        this.props.history.push('/');
      });
    }

    handleCancel(event) {
      event.preventDefault();
      this.props.history.push('/');
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({value: event.target.value});
    }

    render() {
      return (
        <TodoForm
          task="Add Task"
          action="Add"
          onSubmit={this.handleSubmit}
          text={this.state.value}
          onChange={this.handleChange}
          cancel={this.handleCancel}
        />
      );
    }
  }

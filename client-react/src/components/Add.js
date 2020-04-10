import React from 'react';
import Service from './Service';
import Form from './Form';

export default class Add extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.Service = new Service();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.Service.add(this.state.value,()=>{
        this.props.history.push('/');
      });
    }

    handleCancel(event) {
      event.preventDefault();
      this.props.history.push('/');
    }

    render() {
      return (
        <Form
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

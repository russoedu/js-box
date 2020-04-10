import React from 'react';
import Service from './Service';
import Form from './Form';

export default class Add extends React.Component {
  constructor(props) {
      super(props);
      this.state = {desc: ''};

      this.Service = new Service();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
      // event.preventDefault();
      this.setState({desc: event.target.desc});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.Service.add(this.state.desc,()=>{
        this.props.history.push('/');
      });
    }

    render() {
      return (
        <Form
          title="Add Task"
          action="Add"
          desc={this.state.desc}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      );
    }
  }

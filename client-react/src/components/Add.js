import React from 'react';
import Service from './Service';
import Form from './Form';

class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.Service = new Service();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.Service.add(this.state.value, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <Form
        title="Add Task"
        action="Add"
        desc={this.state.value}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

export default Add

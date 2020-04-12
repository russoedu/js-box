import React from 'react';
import Service from './Service';
import Form from './Form';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.Service = new Service();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //set the initial state
    this.state = {
      _id: '',
      desc: ''
    };
  }

  componentDidMount() {
    //the parameter ID
    let id = this.props.match.params.id;
    var thisRef = this;
    this.Service.get(id, (data) => {
      thisRef.setState(data);
    });
  }

  handleChange(event) {
    this.setState({ desc: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var thisRef = this;
    this.Service.update(
      this.state.desc,
      this.state._id,
      () => {
        thisRef.props.history.push('/');
      }
    );
  }

  render() {
    return (
      <Form
        title="Edit Task"
        submitTitle="Update"
        desc={this.state.desc}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Update

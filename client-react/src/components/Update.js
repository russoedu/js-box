import React from 'react';
import Service from './Service';
import Form from './Form';

export default class Update extends React.Component {

  constructor(props) {
      super(props);
      this.Service = new Service();

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
    this.Service.get(id, function(data){
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
    this.Service.update(
      this.state.desc,
      this.state._id,
      function() {
        thisRef.props.history.push('/');
      }
    );
  }

  render() {
    return (
      <Form
        title="Edit Task"
        action="Update"
        desc={this.state.desc}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

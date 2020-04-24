import React from 'react'
import PropTypes from 'prop-types'
import ApiService from './ApiService'
import Form from './Form'

class Update extends React.Component {
  constructor (props) {
    super(props)
    this.ApiService = new ApiService()

    this.changeItem = this.changeItem.bind(this)
    this.updateItem = this.updateItem.bind(this)

    this.state = {
      _id: '',
      desc: ''
    }
  }

  static get propTypes () {
    return {
      match: PropTypes.object.isRequired,
      history: PropTypes.object
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
    const thisRef = this
    this.ApiService.get(id, (data) => {
      const desc = this.ApiService.decodeHTML(data.desc)
      thisRef.setState({ _id: id, desc })
    })
  }

  changeItem (event) {
    this.setState({ desc: event.target.value })
  }

  updateItem () {
    console.log(this.state);

    this.ApiService.update(this.state.desc, this.state._id, () => {
      this.props.history.push('/')
    })
  }

  render () {
    return (
      <Form
        title="Edit Task"
        submitTitle="Update"
        desc={this.state.desc}
        handleSubmit={this.updateItem}
        handleChange={this.changeItem}
      />
    )
  }
}

export default Update

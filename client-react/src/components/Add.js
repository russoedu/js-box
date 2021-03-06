import React from 'react'
import PropTypes from 'prop-types'
import ApiService from './ApiService'
import Form from './Form'

class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state = { desc: '' }

    this.ApiService = new ApiService()

    this.addItem = this.addItem.bind(this)
    this.changeItem = this.changeItem.bind(this)
  }

  static get propTypes () {
    return {
      history: PropTypes.object
    }
  }

  addItem () {
    this.ApiService.add(this.state.desc, () => {
      this.props.history.push('/')
    })
  }

  changeItem (event) {
    event.preventDefault()
    this.setState({ desc: event.target.value })
  }

  render () {
    return (
      <Form
        title="Add Task"
        submitTitle="Add"
        desc={this.state.desc}
        handleSubmit={this.addItem}
        handleChange={this.changeItem}
      />
    )
  }
}

export default Add

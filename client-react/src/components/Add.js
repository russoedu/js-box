import React from 'react'
import PropTypes from 'prop-types'
import ApiService from './ApiService'
import Form from './Form'

class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }

    this.ApiService = new ApiService()

    this.handleChange = this.handleChange.bind(this)
    this.save = this.save.bind(this)
  }

  static get propTypes () {
    return {
      history: PropTypes.object
    }
  }

  handleChange (event) {
    event.preventDefault()
    this.setState({ value: event.target.value })
  }

  save (event) {
    event.preventDefault()
    this.ApiService.add(this.state.value, () => {
      this.props.history.push('/')
    })
  }

  render () {
    return (
      <Form
        title="Add Task"
        submitTitle="Add"
        desc={this.state.value}
        handleChange={this.handleChange}
        handleSubmit={this.save}
      />
    )
  }
}

export default Add

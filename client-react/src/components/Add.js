import React from 'react'
import PropTypes from 'prop-types'
import ApiService from './ApiService'
import Form from './Form'

class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state = { desc: '' }

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
    this.setState({ desc: event.target.value })
  }

  save () {
    this.ApiService.add(this.state.desc, () => {
      this.props.history.push('/')
    })
  }

  render () {
    return (
      <Form
        title="Add Task"
        submitTitle="Add"
        desc={this.state.desc}
        handleChange={this.handleChange}
        handleSubmit={this.save}
      />
    )
  }
}

export default Add

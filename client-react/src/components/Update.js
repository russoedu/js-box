import React from 'react'
import PropTypes from 'prop-types'
import ApiService from './ApiService'
import Form from './Form'

class Update extends React.Component {
  constructor (props) {
    super(props)
    this.ApiService = new ApiService()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      _id: '',
      desc: ''
    }
  }

  static get propTypes () {
    return {
      match: PropTypes.object.isRequired
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
    const thisRef = this
    this.ApiService.get(id, (data) => {
      thisRef.setState(data)
    })
  }

  handleChange (event) {
    this.setState({ desc: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const thisRef = this
    this.ApiService.update(
      this.state.desc,
      this.state._id,
      () => {
        thisRef.props.history.push('/')
      }
    )
  }

  render () {
    return (
      <Form
        title="Edit Task"
        submitTitle="Update"
        desc={this.state.desc}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default Update

import React from 'react'
import PropTypes from 'prop-types'
import ApiService from './ApiService'
import Form from './Form'

class Update extends React.Component {
  constructor (props) {
    super(props)
    this.ApiService = new ApiService()

    this.handleChange = this.handleChange.bind(this)
    this.save = this.save.bind(this)

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
      thisRef.setState(data)
    })
  }

  handleChange (event) {
    this.setState({ desc: event.target.value })
  }

  save () {
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
        handleSubmit={this.save}
        handleChange={this.handleChange}
      />
    )
  }
}

export default Update

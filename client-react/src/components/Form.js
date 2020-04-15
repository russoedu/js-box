import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptyALert: false
    }
    this.submit = this.submit.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  static get propTypes () {
    return {
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      submitTitle: PropTypes.string.isRequired,
      handleChange: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired,
      history: PropTypes.object
    }
  }

  handleCancel (event) {
    event.preventDefault()
    this.props.history.push('/')
  }

  submit (event) {
    event.preventDefault()
    if (this.props.desc === '') {
      this.descInput.focus()
      this.setState({ emptyALert: true })
    } else {
      return this.props.handleSubmit(event)
    }
  }

  closeAlert () {
    this.descInput.focus()
    this.setState({ emptyALert: false })
  }

  componentDidMount () {
    this.descInput.focus()
  }

  render () {
    let alert = ''
    if (this.state.emptyALert) {
      alert =
        <div className="alert alert-warning" id="desc-input-alert" role="alert">
          Task description can&apos;t be empty
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.closeAlert}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
    }
    return (
      <div className="card">
        <form onSubmit={this.submit}>
          <div className="card-header">
            <div className="panel-heading">
              {this.props.title}
            </div>
          </div>
          <div className="card-body">
            <p className="card-text">
              Task description
            </p>
            <input
              type="text"
              className="form-control"
              ref={(input) => { this.descInput = input }}
              value={this.props.desc}
              onChange={this.props.handleChange}
            />
            {alert}
          </div>
          <div className="card-body">
            <button
              type="submit"
              className="btn btn-primary"
            >
              {this.props.submitTitle}
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Form)

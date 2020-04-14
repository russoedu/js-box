import React from 'react'
import PropTypes from 'prop-types'
import ApiService from './ApiService'
import ListRow from './ListRow'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: '' }
    this.ApiService = new ApiService()

    // bind
    this.onDelete = this.onDelete.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  static get propTypes () {
    return {
      history: PropTypes.object
    }
  }

  componentDidMount () {
    this.fillData()
  }

  onDelete (event) {
    const id = event.target.id
    this.ApiService.delete(id, () => {
      this.fillData()
    })
  }

  onUpdate (event) {
    const id = event.target.id
    this.props.history.push('/update/' + id)
  }

  handleAdd () {
    this.props.history.push('/add')
  }

  listRow () {
    if (this.state.items instanceof Array) {
      return this.state.items.map((item, index) => {
        return <ListRow onDelete={this.onDelete} onUpdate={this.onUpdate} item={item} key={index} />
      })
    }
  }

  fillData () {
    this.ApiService.all((data) => {
      this.setState({ items: data })
    })
  }

  render () {
    return (
      <div className="card">
        <div className="card-header">
          List of Tasks
        </div>
        <div className="card-body">
          <p className="card-text alert alert-primary">Click on the task description to edit</p>
        </div>
        <div className="list-group">
          {this.listRow()}
        </div>
        <div className="card-body">
          <button onClick={this.handleAdd} className="btn btn-info">New task</button>
        </div>
      </div>
    )
  }
}

export default List

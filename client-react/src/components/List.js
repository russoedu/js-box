import React from 'react'
import PropTypes from 'prop-types'
import ApiService from './ApiService'
import ListRow from './ListRow'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: '' }
    this.ApiService = new ApiService()

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.updateItem = this.updateItem.bind(this)

    this.itemRef = React.createRef();
  }

  static get propTypes () {
    return {
      history: PropTypes.object
    }
  }

  componentDidMount () {
    this.getItems()
  }

  getItems () {
    this.ApiService.all((data) => {
      this.setState({ items: data })
    })
  }

  addItem () {
    this.props.history.push('/add')
  }

  deleteItem (event) {
    const id = event.target.id
    this.ApiService.delete(id, () => {
      this.getItems()
    })
  }

  updateItem (event) {
    const id = event.target.id
    this.props.history.push('/update/' + id)
  }

  render () {
    const items = []
    if (this.state.items instanceof Array) {
      this.state.items.map((item, index) => {
        items.push(<ListRow ref={this.itemRef} onDelete={this.deleteItem} onUpdate={this.updateItem} item={item} key={index} />)
      })
    }
    return (
      <div className="card">
        <div className="card-header">
          List of Tasks
        </div>
        <div className="card-body">
          <p className="card-text alert alert-primary">Click on the task description to edit</p>
        </div>
        <div className="list-group">
          {items}
        </div>
        <div className="card-body">
          <button onClick={this.addItem} className="btn btn-info">New task</button>
        </div>
      </div>
    )
  }
}

export default List

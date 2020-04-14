import React from 'react'
import PropTypes from 'prop-types'

class ListRow extends React.Component {
  static get propTypes () {
    return {
      item: PropTypes.object.isRequired,
      onDelete: PropTypes.func.isRequired,
      onUpdate: PropTypes.func.isRequired
    }
  }

  render () {
    return (
      <div className="list-group-item">
        <button
          id={this.props.item._id}
          className="btn btn-danger btn-sm btn-delete"
          value="Delete"
          onClick={this.props.onDelete}
        >
          &times;
        </button>
        <span
          id={this.props.item._id}
          className="lead item-description"
          onClick={this.props.onUpdate}
        >
          {this.props.item.desc}
        </span>
      </div>
    )
  }
}

export default ListRow

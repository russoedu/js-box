import React from 'react';

class ListRow extends React.Component {
  render() {
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
    );
  }
}

export default ListRow

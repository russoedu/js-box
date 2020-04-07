import React, { Component } from 'react';

export default class ListTodoRow extends Component {
  render() {
    return (
        <tr>
          <td>
            <button id={this.props.obj._id} onClick={this.props.onDelete} type="button" value="Delete" className="btn btn-danger btn-xs">X</button>
            <a id={this.props.obj._id} onClick={this.props.onUpdate} href="#0">{this.props.obj.desc}</a>
          </td>
        </tr>
    );
  }
}

import React from 'react';

export default class ListTodoRow extends React.Component {
  render() {
    let hidden = '';
    if (this.props.hidden) {
      hidden = <input type="hidden" value={this.props.hidden} />
    }
    return (
        <div className="card">
        <form onSubmit={this.props.onSubmit}>
          <div className="card-header">
            <div className="panel-heading">{this.props.task}</div>
          </div>
          <div className="card-body">
            <p className="card-text">Task description</p>
            {hidden}
            <input type="text" value={this.props.text} onChange={this.props.onChange}  className="form-control"/>
          </div>
          <div className="card-body">
            <button type="submit" className="btn btn-primary">{this.props.action}</button>
            <button type="button" className="btn btn-default" onClick={this.props.cancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

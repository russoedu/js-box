import React from 'react';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    let hidden = '';
    if (this.props.id) {
      hidden = <input type="hidden" value={this.props.id} />
    }
    return (
        <div className="card">
        <form onSubmit={this.props.onSubmit}>
          <div className="card-header">
            <div className="panel-heading">{this.props.title}</div>
          </div>
          <div className="card-body">
            <p className="card-text">Task description</p>
            {hidden}
            <input type="text" value={this.props.desc} onChange={this.props.onChange}  className="form-control"/>
          </div>
          <div className="card-body">
            <button type="submit" className="btn btn-primary">{this.props.action}</button>
            <button type="button" className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);

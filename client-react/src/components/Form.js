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

  focusInput = (component) => {
    if (component) {
      component.focus();
    }
  };

  render() {
    return (
        <div className="card">
        <form onSubmit={this.props.handleSubmit}>
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
              ref={this.focusInput}
              value={this.props.desc}
              onChange={this.props.handleChange}
            />
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
    );
  }
}

export default withRouter(Form);

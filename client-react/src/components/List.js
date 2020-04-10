import React from 'react';
import Service from './Service';
import ListRow from './ListRow';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: '' };
    this.Service = new Service();

    //bind
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentWillMount() {
    this.fillData();
  }

  fillData() {
    var thisRef = this;
    this.Service.all((data) => {
      thisRef.setState({ items: data });
    })
  }

  tabRow() {
    if (this.state.items instanceof Array) {

      var thisRef = this;
      return this.state.items.map(function (object, i) {
        return <ListRow onDelete={thisRef.onDelete} onUpdate={thisRef.onUpdate} obj={object} key={i} />;
      })
    }
  }

  onDelete(event) {
    let id = event.target.id;
    var thisRef = this;
    this.Service.delete(id, () => {
      thisRef.fillData();
    });
  }

  onUpdate(event) {
    let id = event.target.id;
    this.props.history.push('/update/' + id);
  }

  handleAdd() {
    this.props.history.push('/add');
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          List of Tasks
          </div>
        <div className="card-body">
          <p className="card-text alert alert-primary">Click on the task description to edit</p>
        </div>
        <div className="list-group">
          {this.tabRow()}
        </div>
        <div className="card-body">
          <button onClick={this.handleAdd} className="btn btn-info">New task</button>
        </div>
      </div>
    );
  }
}

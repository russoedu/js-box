import React from 'react';
import TodoService from './TodoService';
import ListTodoRow from './ListTodoRow';

export default class IndexItem extends React.Component {
  constructor(props) {
      super(props);
      this.state = {items: ''};
      this.todoService = new TodoService();

      //bind
      this.onDelete = this.onDelete.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
    }
    componentWillMount(){
      this.fillData();
    }

    fillData() {
      var thisRef = this;
      this.todoService.all((data)=>{
          thisRef.setState({ items: data });
      })
    }

    tabRow(){
      if(this.state.items instanceof Array){

        var thisRef = this;
        return this.state.items.map(function(object, i){
            return <ListTodoRow onDelete={thisRef.onDelete} onUpdate={thisRef.onUpdate} obj={object} key={i} />;
        })
      }
    }

    onDelete(event) {
      let id = event.target.id;
      var thisRef = this;
      this.todoService.delete(id,()=>{
        thisRef.fillData();
      });
    }

    onUpdate(event) {
      let id = event.target.id;
      this.props.history.push('/update/'+id);
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

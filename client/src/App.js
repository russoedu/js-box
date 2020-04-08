import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./components/Header";
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import UpdateTodo from './components/UpdateTodo';

export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.loading = 'start'
  // }
  // // componentWillUpdate() {
  // //   alert('hello');

  // // }
  // componentWillMount() {
  //   if (this.loading !== 'will mount') {
  //     alert('will mount');
  //     this.loading = 'will mount';
  //   }
  // }

  // componentWillUpdate() {
  //   if (this.loading !== 'will update') {
  //     alert('will update');
  //     this.loading = 'will update';
  //   }
  // }
  // componentDidMount() {
  //   if (this.loading !== 'did mount') {
  //     alert('did mount')
  //     this.loading = 'did mount';
  //   }
  // }
  // componentDidUpdate() {
  //   if (this.loading !== 'did update') {
  //     alert('did update')
  //     this.loading = 'did update';
  //   }
  // }
  render() {
    return (
      <div>
        <Header/>
        {/* <pre>{this.loading}</pre> */}
        <div className="container">
          <div>
            <Router>
              <div>
                <Route exact path='/' component={ListTodo} />
                <Route path='/add' component={AddTodo} />
                <Route path='/update/:id' component={UpdateTodo} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

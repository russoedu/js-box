import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./components/Header";
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import UpdateTodo from './components/UpdateTodo';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <pre>{this.loading}</pre> */}
        <div className="container">
          <Router>
            <div>
              <Route exact path='/' component={ListTodo} />
              <Route path='/add' component={AddTodo} />
              <Route path='/update/:id' component={UpdateTodo} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

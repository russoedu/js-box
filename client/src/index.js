// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Header} from "./components/Header";

import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import UpdateTodo from './components/UpdateTodo';

import './index.css';

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Header/>
      </div>
    </div>
    <div>
      <Router>
      <div>
      <Route path='/add' component={AddTodo} />
      <Route exact path='/' component={ListTodo} />
      <Route path='/update/:id' component={UpdateTodo} />
      </div>
      </Router>
    </div>
  </div>
,
  document.getElementById('root')
);

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./components/Header";
import Add from './components/Add';
import List from './components/List';
import Update from './components/Update';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Router>
            <div>
              <Route exact path='/' component={List} />
              <Route path='/add' component={Add} />
              <Route path='/update/:id' component={Update} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App

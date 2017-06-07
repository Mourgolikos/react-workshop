import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Search from './search';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to='/'>Search</Link></li>
            <li><Link to='/favorite'>Favorite</Link></li>
          </ul>

          <Route path='/' component={Search}/>
        </div>
      </Router>
    );
  }
}

export default App;

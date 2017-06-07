import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;

const About = () => <h2>About</h2>;
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <div className="App-header">
              <h2>Welcome to React-Workshop</h2>
            </div>
          </div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

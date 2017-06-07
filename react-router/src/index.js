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
const Topic = ({match}) => <h2>{match.params.topicId}</h2>

const Topics = ({match}) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/state`}>State</Link>
        </li>
        <li>
          <Link to={`${match.url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${match.url}/ssr`}>Server Side Rendering</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
    </div>
  );
}


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
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/topics' component={Topics}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

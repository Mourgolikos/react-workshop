import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LifeCycleMethods extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <h2>LifecycleMethods</h2>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React-Workshop</h2>
        </div>
        <div>
          <button>
            Mount
          </button>
          <button>
            Unmount
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

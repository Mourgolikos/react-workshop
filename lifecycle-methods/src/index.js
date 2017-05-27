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
  constructor() {
    super();
    this.state = {
      showLifecycleComponent: false
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.showComponent = this.showComponent.bind(this);
  }

  hideComponent() {
    this.setState({
      showLifecycleComponent: false
    });
  }

  showComponent() {
    this.setState({
      showLifecycleComponent: true
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React-Workshop</h2>
        </div>
        <div>
          <button onClick={this.showComponent}>
            Mount
          </button>
          <button onClick={this.hideComponent}>
            Unmount
          </button>
          {
            this.state.showLifecycleComponent
            && <LifeCycleMethods />
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LifeCycleMethods extends Component {
  constructor() {
    super();
    this.input = null;
    this.state = {
      volume: 0
    };
    this.updateVolume = this.updateVolume.bind(this);
  }

  updateVolume() {
    this.setState({volume: this.state.volume + 1});
  }

  componentWillMount() {
    console.log('-------------------');
    console.log('componentWillMount');
    console.log('-------------------');
  }

  componentDidMount() {
    console.log('-------------------');
    console.log('componentDidMount');
    console.log('-------------------');
    this.input.value = 'React Component'
    this.inc = setInterval(this.updateVolume, 500);
  }

  render() {
    return (
      <div>
        <h2>LifecycleMethods</h2>
        <input
          ref={el => (this.input = el)}
        />
        <p>The volume is {this.state.volume}</p>
      </div>
    )
  }

  componentWillUnmount() {
    console.log('-------------------');
    console.log('componentWillUnmount');
    console.log('-------------------');
    clearInterval(this.inc);
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

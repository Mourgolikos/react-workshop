import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: ''
    };

    this.update = this.update.bind(this);
  }

  update(event) {
    debugger
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React-Workshop</h2>
        </div>
        <div>
          <h2>Write your thoughts: {this.state.thoughts}</h2>
          <input />
        </div>
        <Button
          buttonName='Totos'
          buttonSize='btn-small'
        />
      </div>
    );
  }
}

class Button extends Component {
  render() {
    const {buttonName, buttonSize} = this.props;
    return (
      <button
        className={`button ${buttonSize}`}
      >
        {buttonName}
      </button>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

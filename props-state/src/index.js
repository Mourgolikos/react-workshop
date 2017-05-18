import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React-Workshop</h2>
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

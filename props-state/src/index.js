import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };

    this.addValue = this.addValue.bind(this);
    this.removeValue = this.removeValue.bind(this);
  }

  addValue() {
    this.setState(prevState => ({counter: prevState.counter + 1}))
  }

  removeValue() {
    this.setState(prevState => ({counter: prevState.counter - 1}))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React-Workshop</h2>
        </div>
        <Button
          buttonName='+'
          buttonSize='btn-small'
          updateValue={this.addValue}
        />
        <Button
          buttonName='-'
          buttonSize='btn-small'
          updateValue={this.removeValue}
        />
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    const {buttonName, buttonSize, updateValue} = this.props;
    return (
      <button
        className={`button ${buttonSize}`}
        onClick={updateValue}
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

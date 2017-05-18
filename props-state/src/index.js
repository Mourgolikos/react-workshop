import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '----'
    };

    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({currentEvent: event.type})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React-Workshop</h2>
        </div>
        <div>
          <p>
            <h2>Current Event Type: {this.state.currentEvent}</h2>
          </p>
          <input
            onKeyPress={this.update}
            onCopy={this.update}
            onCut={this.update}
            onPaste={this.update}
            onFocus={this.update}
            onBlur={this.update}
            onDoubleClick={this.update}
            onTouchStart={this.update}
            onTouchMove={this.update}
            onTouchEnd={this.update}
          />
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

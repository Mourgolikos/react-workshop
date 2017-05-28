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
          <Button buttonName='Totos'/>
        </div>
      );
    }
}

// The Button component
class Button extends Component {
  render() {
    return (
      <button
        className='button'
      >
        {this.props.buttonName}
      </button>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

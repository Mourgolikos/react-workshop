import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">Favorite</a></li>
        </ul>

        Let get the party started!
      </div>
    );
  }
}

export default App;

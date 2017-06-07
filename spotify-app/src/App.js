import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './home';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      artists: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onInputChange(event) {
    this.setState({searchText: event.target.value});
  }

  onSearch(event) {
    fetch(`http://localhost:3000/artists?q=${this.state.searchText}`)
      .then(response => response.json())
      .then(artists => {
        this.setState({
          artists,
          searchText: ''
        });
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to='/'>Search</Link></li>
            <li><Link to='/favorite'>Favorite</Link></li>
          </ul>

          <Route
            path='/'
            render={() => {
              return <Home
                  onInputChange={this.onInputChange}
                  onSearch={this.onSearch}
                  artists={this.state.artists}
                />
              }
            }
           />
        </div>
      </Router>
    );
  }
}

export default App;

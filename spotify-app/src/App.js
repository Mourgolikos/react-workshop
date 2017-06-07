import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Search from './search';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onInputChange(event) {
    this.setState({searchText: event.target.value});
  }

  onSearch(event) {
    console.log(this.state.searchText)
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
              return <Search
                  onInputChange={this.onInputChange}
                  onSearch={this.onSearch}
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

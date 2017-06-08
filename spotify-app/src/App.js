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
      artists: [],
      favorite: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSelectArtist = this.onSelectArtist.bind(this);
  }

  onInputChange(event) {
    this.setState({searchText: event.target.value});
  }

  onSearch(event) {
    fetch(`http://localhost:3000/artists?q=${this.state.searchText}`)
      .then(response => response.json())
      .then(artists => {
        this.setState({
          artists: artists.map(artist => ({
            selected: false,
            ...artist
          })),
          searchText: ''
        });
      });
  }

  onSelectArtist(artistId) {
    let favoriteArtists = [];
    const {artists, favorite} = this.state;
    let selectedArtist = artists.find(artist => artist.id === artistId);
    const indexOfSelectedArtist = artists.indexOf(selectedArtist);
    const indexOfFavoriteArtist = favorite.indexOf(selectedArtist);

    if (selectedArtist) {
      selectedArtist = {
        ...selectedArtist,
        selected: !selectedArtist.selected
      };

      favoriteArtists = selectedArtist.selected
        ? [
            ...favorite.slice(0, indexOfFavoriteArtist),
            selectedArtist,
            ...favorite.slice(indexOfFavoriteArtist + 1)
          ]
        :
          [
            ...favorite.slice(0, indexOfFavoriteArtist),
            ...favorite.slice(indexOfFavoriteArtist+ 1)
          ];
    }

    this.setState({
      artists: [
        ...artists.slice(0, indexOfSelectedArtist),
        selectedArtist,
        ...artists.slice(indexOfSelectedArtist + 1)
      ],
      favorite: favoriteArtists
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
                  onSelectArtist={this.onSelectArtist}
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

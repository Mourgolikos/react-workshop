import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './home';
import Favorite from './favorite';
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
    const {favorite} = this.state;
    fetch(`http://localhost:3000/artists?q=${this.state.searchText}`)
      .then(response => response.json())
      .then(artists => {
        this.setState({
          artists: artists.map(artist => {
            return {
              selected: favorite.some(fav => fav.id === artist.id),
              ...artist
            }
          }),
          searchText: ''
        });
      });
  }

  onSelectArtist(artistId) {
    const {artists, favorite} = this.state;
    let artistsList = artists;

    let selectedArtist = artists.find(artist => artist.id === artistId);
    const indexOfSelectedArtist = artists.indexOf(selectedArtist);
    const selectedFavoriteArtist = favorite.find(fav => fav.id === artistId);
    const indexOfFavoriteArtist = favorite.indexOf(selectedFavoriteArtist);

    if (selectedArtist) {
      selectedArtist = {
        ...selectedArtist,
        selected: !selectedArtist.selected
      };
      artistsList = [
        ...artists.slice(0, indexOfSelectedArtist),
        selectedArtist,
        ...artists.slice(indexOfSelectedArtist + 1)
      ];
    }

    const favoriteArtists = selectedArtist && selectedArtist.selected
      ? [
          ...favorite,
          selectedArtist,
        ]
      :
        [
          ...favorite.slice(0, indexOfFavoriteArtist),
          ...favorite.slice(indexOfFavoriteArtist+ 1)
        ];

    this.setState({
      artists: artistsList,
      favorite: favoriteArtists
    });
  }

  render() {
    const {favorite, artists} = this.state;
    const favoriteLength = favorite.length;
    const favoriteCounter = favoriteLength > 0
      ? `(${favoriteLength})`
      : '';

    return (
      <Router>
        <div className="App">
          <div className='navbar'>
            <ul>
              <li><Link to='/'>Search</Link></li>
              <li><Link to='/favorite'>Favorite {favoriteCounter}</Link></li>
            </ul>
          </div>

          <div className='main'>
            <Route
              exact
              path='/'
              render={() => {
                return <Home
                    onInputChange={this.onInputChange}
                    onSearch={this.onSearch}
                    onSelectArtist={this.onSelectArtist}
                    artists={artists}
                  />
                }
              }
            />
            <Route
              path='/favorite'
              render={() => {
                return <Favorite
                  onSelectArtist={this.onSelectArtist}
                  artists={favorite}
                />
              }}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

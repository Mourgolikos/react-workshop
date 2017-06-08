import React, {PureComponent} from 'react';

const Artist = ({artist: {name, genre, year, img}}) => {
  return (
    <li className='card'>
      <img src={img} alt="Avatar"/>
      <div className='container'>
        <h4><b>{name}</b></h4>
        <p>{`${genre} - ${year}`}</p>
      </div>
    </li>
  )
}
class Artists extends PureComponent {
  render() {
    return (
      <div className='artists'>
        <ul>
          {this.props.artists.map(artist => {
            return <Artist key={artist.id} artist={artist}/>
          })}
        </ul>
      </div>
    );
  }
}

export default Artists;
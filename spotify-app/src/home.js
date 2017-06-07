import React from 'react';
import Search from './search';
import Artists from './artists';

const Home = ({artists, onInputChange, onSearch}) => {
  return (
    <div>
      <Search
        onInputChange={onInputChange}
        onSearch={onSearch}
      />

      {artists.length > 0 &&
        <Artists
          artists={artists}
        />
      }
    </div>
  );
}

export default Home;
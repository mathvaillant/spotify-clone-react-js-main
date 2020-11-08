import React, {
  useState,
  useEffect,
  Fragment
} from 'react';

import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextApi/StateProvider';

const Home = () => {
  const [{playlists}, dispatch] = useStateValue();

  return (
    <div className='mainInner'>
      <h1>My Playlists</h1>
        <div className="cardsWrap">
          <div className="cardsWrapInner">
            { playlists?.items?.map((playlist, id) => (
              <Link to={`/playlist/` + playlist.id} 
                key={id} 
                style={{textDecoration: 'none', 
                marginBottom: '4rem'}
                }>
                <div className="card" key={id}>
                  <div className="cardImage">
                    <img src={playlist.images[0].url}/>
                  </div>
                  <div className="cardContent">
                    <h3>{playlist.name}</h3>
                    <span className='subTextSmall'>{playlist.description}</span>
                  </div>
                  <span className="playIcon">
                    <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Home;



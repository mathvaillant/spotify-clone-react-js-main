import React, {
  Fragment,
  useState,
  useEffect
} from 'react';
import './App.scss';
import Login from './components/pages/Login';

import Nav from './components/Nav';
import Main from './components/Main';
import MusicControls from './components/MusicControls';
import { getTokenFromUrl } from './components/spotify';
import { useStateValue } from './ContextApi/StateProvider';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token, playlists, playlist, nowPlaying }, dispatch] = useStateValue()

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      //returns a Promise
      spotify.setAccessToken(_token);

      //returns a Promise
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      })

      //returns a Promise
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      // returns a Promise 
      // spotify.getPlaylist('4khiOhoVjh2uAKyzwZ2q5o').then((playlist) => {
      //   dispatch({
      //     type: 'SET_PLAYLIST',
      //     playlist: playlist
      //   });
      // });
    }
  }, []);

  return (
    <div className='outerWrap'>
      {
        token ? (
          <>
            <div className="App">
              <Nav spotify={spotify} />
              <Main spotify={spotify} />
            </div>
            {
              nowPlaying && (
                <MusicControls spotify={spotify} />
              )
            }
          </>
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;

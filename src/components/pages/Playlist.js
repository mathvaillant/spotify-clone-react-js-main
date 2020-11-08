import React, { useEffect } from 'react';
import { useStateValue } from '../../ContextApi/StateProvider';
import SpotifyWebApi from 'spotify-web-api-js';

import Song from '../Song';

const spotify = new SpotifyWebApi();

const Playlist = ({ match }) => {
  const [{playlists, playlist}, dispatch] = useStateValue();

  const matchPlaylistId = playlists.items.filter((playlist) => {
      return playlist.id === match.params.id
  })

  const currentPlaylist = matchPlaylistId[0];

  spotify.getPlaylist(currentPlaylist.id).then((playlist) => {
    dispatch({
      type: 'SET_PLAYLIST',
      playlist: playlist
    });
  });

  return (
    <div className='playlistPage'>
      {
        <div className="mainInner">
          <div className='playlistPageInfo'>
            <div className="playlistPageImage">
              <img src={currentPlaylist.images[0].url} style={{maxWidth: '190px', maxHeight: '190px'}}/>
            </div>
            <div className="playlistPageContent">
              <p className='smallText capitalize'>{currentPlaylist.type}</p>
              <h1>{currentPlaylist.name}</h1>
              <p className='tagline'>{currentPlaylist.description}</p>
              <div className="playlistPageDesc">
                <span className='numberOfSongs'>{currentPlaylist.tracks.total} Songs</span>
              </div>
              
            </div>
          </div>

          <div className="playlistPageSongs">
            <div className="playlistButtons">
              <span className="playIcon">
                <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="white"></polygon></svg>
              </span>
              <div className="icons">
                <div className="icon iconsHeart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill='white' viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>
                </div>
                <div className="icon iconsDots">
                </div>
              </div>
            </div>
            <br/>
            <span style={{ fontSize: '12px', letterSpacing: '1px' }}># TITLE</span>

            <ul className='songList'>
              { 
                playlist?.tracks?.items?.map((song) => (
                  <Song song={song} key={song.track.id}/>
                ))
              }
            </ul>

          </div>
        
        </div> 
      }
    </div>
  )
}

export default Playlist

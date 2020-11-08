import React from 'react';

const Song = ({ song }) => {
  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <li>
      <div className="song">
        <span className="imgSongAlbum">
          <img src={song.track.album.images[2].url} alt="cover"/>
        </span>
      </div>
      <div className="songDetails">
        <h3 className="songName">{song.track.name}</h3>
        <h4 className="songWriter">{song.track.artists[0].name}</h4>
      </div>
      <div className="songTime">
        <span>
        {
          millisToMinutesAndSeconds(song.track.duration_ms)
        }
        </span>
      </div>
    </li>
  )
}

export default Song 
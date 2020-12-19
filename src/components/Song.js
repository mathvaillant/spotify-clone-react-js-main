import React, {
  useEffect
} from 'react';
import { useStateValue } from '../ContextApi/StateProvider';

const Song = ({ song, key }) => {
  const [nowPlaying, dispatch] = useStateValue();

  useEffect(() => {
    document.querySelector('.songItem').addEventListener('click', (e) => {
      let nowPlaying;
      if (e.target.classList == 'songItem') {
        console.log(e.target.innerHTML)
        nowPlaying = {
          img: e.target.children[0].children[0].children[0].getAttribute('src'),
          title: e.target.children[1].children[0].textContent,
          artist: e.target.children[1].children[1].textContent,
          duration: e.target.children[2].textContent
        }
        console.log(nowPlaying)
      } dispatch({
        type: 'SET_NOW_PLAYING',
        nowPlaying: nowPlaying
      });
    });
  }, []);

  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <li className='songItem'>
      <div className="song">
        <span className="imgSongAlbum">
          <img src={song.track.album.images[2].url} alt="cover" />
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
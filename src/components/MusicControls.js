import React from 'react'

import Shuffle from './iconControls/shuffle.png';
import Previous from './iconControls/previous.png';
import Play from './iconControls/play.png';
import Next from './iconControls/next.png';
import Repeat from './iconControls/repeat.png';

import { Grid, Slider } from '../../node_modules/@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function MusicControls() {
  return (
    <div>
      <div className="musicControls">
        <div className="nowPlaying">
          <div className="albumCover">
            <img src="https://upload.wikimedia.org/wikipedia/en/e/e0/AmericanIV.jpg" alt="" />
          </div>
          <div className="artist">
            <span>Hurt</span>
            <span>Johhny Cash</span>
          </div>
        </div>

        <div className="playerControls">
          <div className="controlButtons">
            <button><img src={Shuffle} alt="" /></button>
            <button><img src={Previous} alt="" /></button>
            <button className='buttonPlay'><img src={Play} alt="" /></button>
            <button><img src={Next} alt="" /></button>
            <button><img src={Repeat} alt="" /></button>
          </div>
        </div>
        <div className="extraControls">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon style={{color: '#fff'}} />
            </Grid>
            <Grid item>
              <VolumeDownIcon style={{color: '#fff'}} />
            </Grid>
            <Grid item xs>
              <Slider style={{color: '#1db954'}}/>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default MusicControls

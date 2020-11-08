import React,
{
  useState,
  useEffect,
  Fragment
} from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
 
const UpperNav = ({ spotify }) => {
  const [{user}, dispatch] = useStateValue();

  return(
    <div className='upperNav'>
      {/* <div className="backForwardButtons">
        <span className='goBack'>
          <svg role="img" focusable="false" height="30" width="30" viewBox="0 0 24 24" className="Svg-sc-1usfroi-0 fOBQdj _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"><polyline points="16 4 7 12 16 20" fill="none" stroke="#fff"></polyline></svg>
        </span>
        <span className='goForward'>
          <svg role="img" focusable="false" height="30" width="30" viewBox="0 0 24 24" className="Svg-sc-1usfroi-0 fOBQdj _6fe5d5efc9b4a07d5c424071ac7cdacb-scss"><polyline points="8 4 17 12 8 20" fill="none" stroke="#fff"></polyline></svg>
        </span>
      </div> */}
      <div className="search__bar">
        <SearchIcon />
        <input 
          type="text"
          placeholder='Search for Artists, Albums, Songs, Playlists...'
        />
      </div>
      <div className='userProfile'>
        <Avatar className='me__profile__picture' src={user?.images[0].url} alt='MV'></Avatar> {' '}
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default UpperNav;
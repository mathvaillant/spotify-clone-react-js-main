import React from 'react';
import Home from './Home';
import UpperNav from './UpperNav';
import { Switch, Route } from 'react-router-dom';
import PlaylistPage from './pages/Playlist';

const Main = ({ spotify }) => {
  return (
    <div className="main">
      <UpperNav spotify={spotify}/>
      <div className="mainContent">
        {/* Switch is inside of .mainContent so it switches all only inside of it */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/#'>
            
          </Route>
          <Route exact path='/#'>
            
          </Route>
          <Route exact path='/playlist/:id' component={PlaylistPage} spotify={spotify}></Route>
        </Switch>
      </div>
    </div>
  )
}

export default Main

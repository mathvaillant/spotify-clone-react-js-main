import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Login from './components/pages/Login';

import { StateProvider } from './ContextApi/StateProvider';
import reducer, { initialState } from './ContextApi/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <App />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

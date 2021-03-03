import React, { useContext, createContext, useEffect, useReducer, Provider } from 'react';
import { io } from 'socket.io-client';
import LoginContainer from './containers/LoginContainer';
import WaitingRoomContainer from './containers/WaitingRoomContainer';
import GameContainer from './containers/GameContainer';
const socket = io();


import { AppContext } from './state/context';
import { initialAppState, appReducer} from './state/reducers';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const checkSocket = () => {
    socket.emit('test', `This is the first socket test from ${socket.id}`);
  };

  const [ appState, appDispatch] = useReducer(appReducer, initialAppState);

  return (

    <AppContext.Provider 
      value={{
          appState, 
        appDispatch
    }}>

    {/* // <div>
    //     <button onClick={checkSocket}>click</button>
    // </div> */}

    <Router>
      <Switch>
        <Route path='/waitingroom' component={WaitingRoomContainer} />
        <Route exact path='/game' component={GameContainer} />
        <Route exact path='/' component={LoginContainer} />
      </Switch>
    </Router>

    </AppContext.Provider>
  );
};

export default App;

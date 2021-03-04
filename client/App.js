import React, { useContext, createContext, useEffect, useReducer, Provider } from 'react';
import { io } from 'socket.io-client';
const socket = io();
import { Switch, Route } from 'react-router-dom';

// react router components
import LoginContainer from './containers/LoginContainer';
import WaitingRoomContainer from './containers/WaitingRoomContainer';
import GameContainer from './containers/GameContainer';
import DashBoardContainer from './containers/DashBoardContainer';

import { AppContext } from './state/context';
import { initialAppState, appReducer} from './state/reducers';


const App = () => {

  const [appState, appDispatch] = useReducer(appReducer, initialAppState); 

  const checkSocket = () => {
    socket.emit('test', `This is the first socket test from ${socket.id}`);
  };

  // let updateState = {};
  

  //  useEffect(()=> {

  //     console.log('before dispatchers launch: ', updateState)

  //     if (updateState.algoName !== appState.algoName){
  //       appDispatch({
  //         type: 'UPDATE_PROMPT',
  //         payload: updateState.algoPrompt
  //       })

  //       appDispatch({
  //           type: 'UPDATE_FUNCTION',
  //           payload: updateState.algoStart 
  //       })  

  //      appDispatch({
  //             type: 'UPDATE_COMPLETEDALGOS',
  //             payload: updateState.completedAlgos
  //         })

  //       appDispatch({
  //           type: 'UPDATE_TOTALROWS',
  //           payload: updateState.totalRows
  //       })

  //       appDispatch({
  //           type: 'STORE_TEST_CASES',
  //           payload: updateState.test_cases,
  //       })

  //       appDispatch({
  //         type: 'UPDATE_ALGONAME',
  //         payload: updateState.algoName,
  //       })
  //     }
  //   }, [updateState])

  socket.on('sendAlgo', (resBody) => {
    console.log('App.jsx got back from server resbody: ', resBody)
      
    // updateState = Object.assign({}, resBody);
    // console.log('after object.assign: ', updateState)


    appDispatch({
      type: 'UPDATE_PROMPT',
      payload: resBody.algoPrompt
    })

    appDispatch({
        type: 'UPDATE_FUNCTION',
        payload: resBody.algoStart 
    })  

   appDispatch({
          type: 'UPDATE_COMPLETEDALGOS',
          payload: resBody.completedAlgos
      })

    appDispatch({
        type: 'UPDATE_TOTALROWS',
        payload: resBody.totalRows
    })

    appDispatch({
        type: 'STORE_TEST_CASES',
        payload: resBody.test_cases,
    })

    appDispatch({
      type: 'UPDATE_ALGONAME',
      payload: resBody.algoName,
    })


  })

  socket.on('addUser', (newUser) => {
    appDispatch({
      type: 'ADD_USER',
      payload: newUser
    })
  })

  return (
    <AppContext.Provider 
      value={{
        appState, 
        appDispatch
    }}>
      
      <Switch>
        <Route path='/dashboard' component={DashBoardContainer} />
        <Route path='/waitingroom' component={WaitingRoomContainer} />
        <Route exact path='/game' component={GameContainer} />
        <Route exact path='/' component={LoginContainer} />
      </Switch>

    </AppContext.Provider>
    );
};

export default App;


/*
    <AppContext.Provider 
      value={{
        appState, 
        appDispatch
    }}>

    { // <div>
    //     <button onClick={checkSocket}>click</button>
    // </div> }

    <Switch>
    <Route path='/waitingroom' component={WaitingRoomContainer} />
    <Route exact path='/game' component={GameContainer} />
    <Route exact path='/' component={LoginContainer} />
  </Switch>

</AppContext.Provider>



*/
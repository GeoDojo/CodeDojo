import React, { useContext, createContext, useEffect } from 'react';
import { io } from "socket.io-client";
const socket = io();

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {

const checkSocket = () => {
   socket.emit('test', 'This is the first socket test')
}

    return (
        // <div>
        //     <button onClick={checkSocket}>click</button>
        // </div>  
        <Router>
            <Switch>
                <Route exact path='/' component={LoginContainer}/>
                <Route exact path='/waitingRoom' component={WaitingRoomContainer} />
                <Route exact path='/gameContainer' component={GameContainer} />
            </Switch>
        </Router>

    )
}

export default App;

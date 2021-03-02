import React, { useContext, createContext, useEffect } from 'react';
import { io } from "socket.io-client";
const socket = io();

const App = () => {

const checkSocket = () => {
   socket.emit('test', `This is the first socket test from ${socket.id}`)
}

    return (
        <div>
            <button onClick={checkSocket}>click</button>
        </div>  
    )
}

export default App;

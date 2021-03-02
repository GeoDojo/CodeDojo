import React, { useContext, createContext, useEffect } from 'react';
//const socket = io();

const App = () => {

const checkSocket = () => {
   // socket.emit('test', 'This is the first socket test')
}

    return (
        <div>
            hi from App.js
            <button onClick={() => {console.log('click')}}>send</button>
        </div>
    )
}

export default App;

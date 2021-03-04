import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../components/Button';
import { io } from 'socket.io-client';
const socket = io();

import { AppContext } from '../state/context';

const LogInContainer = () => {
  const { appState } = useContext(AppContext);
  //to-do: using OAuth instructions
  // const googleLogin = () => {
  //     console.log("logged In")
  //{/* {<AppContextProvider> } */}
     
  //to-dos: for facebook, github
  //to-dos: anonymous
  //to-dos: reRoute to waitingRoom (this might be in the App.js)

  return (
    <div className='login-container'>
      <div className='banner-container'>
        <div className=''>CODE</div>
        <div className=''>DOJO</div>
      </div>
      <div className='login-container'>
        <Link to='/game'>
          {/* Reusing the Button.js component and passing genericClick to  */}
          <LoginButton
            id='GoogleBtn'
            siteName={'Google'}
            genericClick={'googleLogin'}
          />
          <LoginButton
            id='FacebookBtn'
            siteName={'Facebook'}
            genericClick={'FACEBOOK Login'}
          />
          <LoginButton
            id='GithubBtn'
            siteName={'GitHub'}
            genericClick={'GITHUB Login'}
          />

          <LoginButton
            id='AnonymousBtn'
            siteName={'Anonymous'}
            genericClick={() => {
              socket.emit('joinRoom', appState.roomNumber);
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogInContainer;

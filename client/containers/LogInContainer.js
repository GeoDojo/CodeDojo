import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/Button";
import { io } from "socket.io-client";
const socket = io();

import { AppContext } from "../state/context";

const LogInContainer = () => {
  const { appState } = useContext(AppContext);
  //to-do: using OAuth instructions
  // const googleLogin = () => {
  //     console.log("logged In")
  // }

  //to-dos: for facebook, github
  //to-dos: anonymous
  //to-dos: reRoute to waitingRoom (this might be in the App.js)

  return (
    // <div className="login-page-container">
    <div className="login-bar">
      <div className="login-container">
        <div className="banner-container">
          <div className="titleText">CODE</div>
          <div className="titleText">DOJO</div>
        </div>
        <Link to="/game">
          {/* Reusing the Button.js component and passing genericClick to  */}
          <LoginButton
            id="GoogleBtn"
            siteName={"Sign in with Google"}
            genericClick={"googleLogin"}
          />
          <LoginButton
            id="FacebookBtn"
            siteName={"Sign in with Facebook"}
            genericClick={"FACEBOOK Login"}
          />
          <LoginButton
            id="GithubBtn"
            siteName={"Sign in with GitHub"}
            genericClick={"GITHUB Login"}
          />

          <LoginButton
            id="AnonymousBtn"
            siteName={"Play Anonymously"}
            genericClick={() => {
              const body = document.querySelect("body");
              body.style.background = "white;";

              console.log("room # in loginContainer: ", appState.roomNumber);
              socket.emit("joinRoom", appState.roomNumber);
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogInContainer;

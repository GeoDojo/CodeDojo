import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReplayButton from "../components/Button";
import ExitGameButton from "../components/Button";
import { AppContext } from "../state/context";
import ImageAvatars from "../components/ImageAvatar";
import AllPlayersAvatar from "../components/AllPlayersAvatar";

const DashBoardContainer = () => {
  const { appState, appDispatch } = useContext(AppContext);

  const displayWinner = () => {};

  const displayAvatar = () => {};

  return (
    //wrap this into link
    <div>
      <Link to="/game">
        <ReplayButton
          genericClick={() => {}}
          siteName={"Replay"}
          id="ReplayBtnWaitingRoom"
        />
      </Link>

      <Link to="/">
        <ExitGameButton
          genericClick={() => {}}
          siteName={"Exit"}
          id="ExitBtnWaitingRoom"
        />
      </Link>
      <div className="WinnerContainer">
        <h1>Winner:</h1>
        <ImageAvatars />
      </div>
      <div className="AllPlayersContainer">
        <h1>Losers:</h1>
        <AllPlayersAvatar />
      </div>
    </div>
  );
};

export default DashBoardContainer;

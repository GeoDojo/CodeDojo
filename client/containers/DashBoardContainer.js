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
    <div className="dashboard">
      <Link to="/game">
        <ReplayButton
          genericClick={() => {}}
          siteName={"REPLAY"}
          id="ReplayBtnWaitingRoom"
        />
      </Link>

      <Link to="/">
        <ExitGameButton
          genericClick={() => {}}
          siteName={"EXIT"}
          id="ExitBtnWaitingRoom"
        />
      </Link>
      <div className="WinnerContainer">
        <h1>WINNER:</h1>
        <ImageAvatars />
      </div>
      <div className="AllPlayersContainer">
        <h1>LOSERS:</h1>
        <AllPlayersAvatar />
      </div>
    </div>
  );
};

export default DashBoardContainer;

import React, {useContext } from "react";

import AlertDialog from "../components/AlertDialog";
import CodeBox from "../components/codeBox";
// import SubmitButton from "../components/Button";
import StartButton from "../components/Button";
import ImageAvatar from "../components/ImageAvatar";
import { AppContext } from "../state/context";
import { io } from "socket.io-client";
const socket = io();

const GameContainer = () => {
  const { appState } = useContext(AppContext);

  return (
    <div className='panel'>
      <ImageAvatar />
      {!appState.totalRows && <StartButton
        genericClick={() => {
          socket.emit('getAlgo', {
            completedAlgos: appState.completedAlgos,
            totalRows: appState.totalRows,
            roomNumber: appState.roomNumber,
          });
        }}
        siteName={"Start"} id="StartBtnWaitingRoom" />}
      <div className='promptContainer'>
        <h1>{appState.algoName}</h1>
        <p>{appState.prompt}</p>
      </div>
      <CodeBox codeBoxName={'Your Input'} codeBoxValue={appState.function} />
      <AlertDialog  id="StartBtnWaitingRoom"/>
    </div>
  );
};

export default GameContainer;







  // return (
  //   <div className="panel">
  //     <ImageAvatar />
  //     <StartButton
  //       genericClick={() => {
  //         socket.emit("getAlgo", getAlgoPayload);
  //       }}
  //       siteName={"Start"}
  //       id="StartBtnWaitingRoom"
  //     />
  //     <div className="prompContainer">
  //       <h1>{appState.algoName}</h1>
  //       <p>{appState.prompt}</p>
  //     </div>
  //     <CodeBox codeBoxName={"Your Input"} codeBoxValue={appState.function} />

  //     <AlertDialog id="SubmitBtnGameContainer" />GameGameGame
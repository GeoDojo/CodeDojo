import React, { useContext, createContext, useEffect, useReducer, Provider } from 'react';
import CodeBox from '../components/codeBox';
import SubmitButton from '../components/Button';
import StartButton from '../components/Button';
import Dialog from '../components/Dialog';
import ImageAvartar from '../components/ImageAvartar';
import { AppContext } from '../state/context';
import { io } from 'socket.io-client';
const socket = io()
const GameContainer = () => {
  const { appState, appDispatch } = useContext(AppContext);

  return (
    <div className='panel'>
      <ImageAvartar />
      <StartButton 
                genericClick={() => {
                    socket.emit('getAlgo', {
                      completedAlgos: appState.completedAlgos,
                      totalRows: appState.totalRows,
                      roomNumber: appState.roomNumber,
                    });
                }}
                siteName = {"Start"} id="StartBtnWaitingRoom"/>
      <div className='prompContainer'>
        <h1>{appState.algoName}</h1>
        <p>{appState.prompt}</p>
      </div>
      <CodeBox codeBoxName={'Your Input'} codeBoxValue={appState.function}/>      
      <SubmitButton
        genericClick = { () => {




          socket.emit('submitAlgo', {
            test_cases: appState.test_cases,
            username: appState.username,
            userFxn: appState.userFxn,
          })
           
        }}
        siteName={'Submit'}
        id='SubmitBtnGameContainer'
      />
      <Dialog />
    </div>
  );
};
export default GameContainer;
            // eval("(var fn = function(s){ return s })");
            // console.log(fn("s"));
            //grab the user input from codeMirror, add paratheses in the begining and end of the string
            //declare a variable (evalfn) to store the = eval(new userInput string)
            //send it back to back end in request body {userFxn = evalfn}
            //     let userFn = eval(
            //     `(function addTwo(num){
            //         return num + 2;
            //     })`)
            // console.log(userFn(2))
/*
    genericClick = { () => {
        fetch(`/game/start`, {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON',
            }
            , body: JSON.stringify({
                completedAlgos: {},
                totalRows: 0,
            }),
          })
            .then((data) => data.json())
            .then((data) => {
                console.log("from backend", data)
                appDispatch({
                    type: 'UPDATE_PROMPT',
                    payload: data.algoPrompt
                })
                appDispatch({
                    type: 'UPDATE_FUNCTION',
                    payload: data.algoStart 
                })  
                appDispatch({
                        type: 'UPDATE_SUBMISSIONTESTSTATUS',
                        payload: data.endGame
                    })
                appDispatch({
                    type: 'UPDATE_TOTALROWS',
                    payload: { totalRows: data.totalRows, }
                })
            }) 
    }}
*/
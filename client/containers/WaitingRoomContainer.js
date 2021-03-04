import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import StartButton from '../components/Button'
import { AppContext } from '../state/context';
import { io } from 'socket.io-client';
const socket = io();




const WaitingRoomContainer = () => {

    //to-do: display the list of users logged in or anonymous
        //empty and reset the whole array everytime the StartButton has been clicked or user join or user left
    const { appState, appDispatch } = useContext(AppContext);
    
    const getAlgoPayload = {
        completedAlgos: appState.completedAlgos,
        totalRows: appState.totalRows,
        roomNumber: appState.roomNumber,
    };

    return (//wrap this into link
        <div>
        <Link to='/game'>
            <StartButton 
                genericClick={() => {
                    socket.emit('getAlgo', getAlgoPayload);
                }}
                siteName = {"Start"} id="StartBtnWaitingRoom"/>

            
        </Link>
        </div>
    )
}

export default WaitingRoomContainer;


/*
original fetch request:


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
                                type: 'UPDATE_COMPLETEDALGOS',
                                payload: data.completedAlgos
                            })

                        appDispatch({
                            type: 'UPDATE_TOTALROWS',
                            payload: data.totalRows
                        })

                        appDispatch({
                            type: 'STORE_TEST_CASES',
                            payload: data.test_cases,
                        })
                    }) 




*/
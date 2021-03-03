import React from 'react';
import {Link} from 'react-router-dom';
import StartButton from '../components/Button'


const WaitingRoomContainer = () => {

    //to-do: display the list of users logged in or anonymous
        //empty and reset the whole array everytime the StartButton has been clicked or user join or user left

    return (//wrap this into link
        <div>
        <Link to='/game'>
            <StartButton 
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

                        // appDispatch({
                        //         type: 'UPDATE_SUBMISSIONTESTSTATUS',
                        //         payload: data.endGame
                        //     })

                        appDispatch({
                            type: 'UPDATE_TOTALROWS',
                            payload: { totalRows: data.totalRows, }
                        })
                    }) 
                }}
                siteName = {"Start"} id="StartBtnWaitingRoom" genericClick={ "start" }/>

            
        </Link>
        </div>
    )
}

export default WaitingRoomContainer;

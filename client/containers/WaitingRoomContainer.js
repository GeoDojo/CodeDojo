import React from 'react'
import StartButton from '../components/Button'


const WaitingRoomContainer = () => {

    //to-do: display the list of users logged in or anonymous
        //empty and reset the whole array everytime the StartButton has been clicked or user join or user left

    return (
        <div>
         <StartButton siteName = {"Start"} id="StartBtnWaitingRoom" genericClick={ "start" }/>
        </div>
    )
}

export default WaitingRoomContainer;

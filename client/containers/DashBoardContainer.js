import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import ReplayButton from '../components/Button';
import ExitGameButton from '../components/Button';
import { AppContext } from '../state/context';

const DashBoardContainer = () => {

    const { appState, appDispatch } = useContext(AppContext);

const displayWinner = () => {

}

const displayAvatar = () => {

}

     return ( //wrap this into link
        <div>
        <Link to='/game'>
            <ReplayButton 
                genericClick={() => {
                }}
                siteName = {"Replay"} id="ReplayBtnWaitingRoom"/>
        </Link>

        <Link to='/'>
            <ExitGameButton 
                genericClick={() => {
                }}
                siteName = {"Exit"} id="ExitBtnWaitingRoom"/>
        </Link>
        </div>
    )
}

export default DashBoardContainer;



import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AppContext } from '../state/context';
import { io } from 'socket.io-client';
const socket = io()

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const { appState, appDispatch } = useContext(AppContext);

  const getAlgoPayload = {
    completedAlgos: appState.completedAlgos,
    totalRows: appState.totalRows,
    roomNumber: appState.roomNumber,
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nextAlgoHandleClick = () => {
    setOpen(false);
          socket.emit('getAlgo', getAlgoPayload);
  };

  const LeaveGameHandleClick = () => {
    setOpen(false);
    <Link to='/'>
    </Link>
  };

  
  //create array of encouraging words if user pass
  //create array of retry if user fail
  //endGame status from backend

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            dummy alert: "Hooray! Great work!"
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={nextAlgoHandleClick} color="primary">
            Next Algo
          </Button>
          <Button onClick={LeaveGameHandleClick} color="primary" autoFocus>
            Leave Game
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
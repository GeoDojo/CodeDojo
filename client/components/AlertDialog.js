import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AppContext } from "../state/context";
import { io } from "socket.io-client";

const socket = io();

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const { appState, appDispatch } = useContext(AppContext);

  const HandleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

const nextAlgoHandleClick = () => {
  setOpen(false);
  socket.emit('getAlgo', {
    completedAlgos: appState.completedAlgos,
    totalRows: appState.totalRows,
    roomNumber: appState.roomNumber,
  })
};

const LeaveGameHandleClick = () => {
  setOpen(false);
};

//create array of encouraging words if user pass
// create array of retry if user fail
// endGame status from backend

return (
  <div>
    <Button variant="outlined" color="primary" onClick={() => {

      const evalFxn = '(' + appState.userFxn + ')';

      socket.emit('submitAlgo', {
        test_cases: appState.test_cases,
        username: appState.username,
        userFxn: evalFxn,
      })
      HandleClickOpen()
      }}>
        submit
    </Button>

      <Dialog
      open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">{"Code Dojo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            "Hooray! Great work on the Algo! Let's try another one!"
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={nextAlgoHandleClick} color="primary">
            Next Algo
          </Button>
          <Link to="/dashboard">
            <Button onClick={LeaveGameHandleClick} color="primary" autoFocus>
              Leave Game
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
);
}


import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function AllPlayersAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Shah" src="./assets/shah.png" />
      <Avatar alt="Eric" src="./assets/eric.jpg" />
      <Avatar alt="Jake" src="./assets/jake.png" />
      <Avatar alt="Cho" src="./assets/cho.jpg" />
    </div>
  );
}

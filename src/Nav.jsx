import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function Nav(props) {
  let back = props.back === undefined ? "#fbeeac" : props.back;
  console.log(back);
  let pos = props.pos === undefined ? "relative" : props.pos;
  let location = props.location === undefined ? "/home" : "/";
  const useStyles = makeStyles((theme) => ({
    root: {
      boxShadow: "none",
      flexGrow: 1,
      backgroundColor: back,
      color: "white",
      fontWeight: "bold",
      position: pos,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    Typography: {
      fontWeight: "bolder",
    },
  }));
  const classes = useStyles();
  return (
    <div className="navigation">
      <AppBar className={classes.root} position="static">
        <Toolbar variant="dense">
          <Link to={location}>
            <Typography className={classes.Typography} variant="h6">
              MEDBED
            </Typography>
          </Link>
          <ul className="navigation_list">
            <Link to="/contact">CONTACT</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/register">REGISTER</Link>
            <Link to="/login">LOGIN</Link>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;

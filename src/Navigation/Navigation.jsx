import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import "./Navigation.css";
import { userContext } from "../UserContext";
import UpdateBed from "../UpdateBed/UpdateBed";

import Home from "../Home/Home";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Register from "../Register/Register";
import AboutUs from "../AboutUs/AboutUs";
import Login from "../Login/Login";
import { json } from "body-parser";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Navigation() {

  const hospital = JSON.parse(localStorage.getItem("hospital"));
  let history = useHistory();
  const [hospitalName, setHospitalName] = useState("LOGIN");

  function logout(event) {
    event.preventDefault();
    setHospitalName("LOGIN");
    localStorage.clear();
  }


  const classes = useStyles();
  return (
    <userContext.Provider value = {{hospitalName, setHospitalName}}>
    <Router>
      <div className={classes.root}>
        <AppBar position="static" className="navigation">
          <Toolbar variant="dense">
            <Link to="/">
              <Typography variant="h6">MEDBED</Typography>
            </Link>
            <ul className="navigation_list">
              <Link to="/contact_us">CONTACT US</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/register">REGISTER</Link>
              { !hospital ? <Link to="/login">LOGIN</Link> : <Link onClick={logout} to="/">LOGOUT</Link> }
            </ul>
          </Toolbar>
        </AppBar>
      </div>
      <Switch>
        <Route path="/" exact strict component={Home} />
        <Route path="/contact_us" exact strict component={ContactUs} />
        <Route path="/register" exact strict component={Register} />
        <Route path="/about" exact strict component={AboutUs} />
        <Route path="/login" exact strict component={Login} />
        <Route path="/updatebed" exact strict component={UpdateBed} />
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default Navigation;

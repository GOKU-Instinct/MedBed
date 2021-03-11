import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import "./Navigation.css";

import Home from "../Home/Home";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Register from "../Register/Register";
import AboutUs from "../AboutUs/AboutUs";
import Login from "../Login/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Navigation() {
  const classes = useStyles();
  return (
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
              <Link to="/login">LOGIN</Link>
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
      </Switch>
    </Router>
  );
}

export default Navigation;

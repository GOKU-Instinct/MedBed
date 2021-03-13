import React, { useState, useContext } from "react";
import circle from "../Images/circle.png";
import circle1 from "../Images/circle1.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { userContext } from "../UserContext";
import "./Start.css";
import Nav from "../Nav";
// import classes from "*.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    flexGrow: 1,
    backgroundColor: "#fbf6f0",
    color: "white",
    fontWeight: "bold",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  Typography: {
    fontWeight: "bolder",
  },
}));
function Start() {
  const hospital = JSON.parse(localStorage.getItem("hospital"));

  const [hospitalName, setHospitalName] = useState("LOGIN");

  function logout(event) {
    event.preventDefault();
    setHospitalName("LOGIN");
    localStorage.clear();
  }
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Nav back={"transparent"} pos={"absolute"}></Nav>
      <div className="hero_section">
        <img className="circle" src={circle} />
        <div className="circle1_container">
          <img className="circle1" src={circle1} />
        </div>
        <div className="image"></div>
        <div className="main_section_wrapper">
          <div className="main_section">
            <h1>Welcome</h1>
            <p>
              We believe and practice that every patient should be well taken
              care of equally. By being aware of small things can make a huge
              effect on our lives. Through this web application, you will be
              able to get the required ward bed that your patient needs. Don't
              have to wait in long lines.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;

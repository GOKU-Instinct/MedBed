import React from "react";
import Nav from "../Nav";
import "./HospitalBeds.css";

function HospitalBeds(props) {
  // get the details of the hospital specified
  const name = props.match.params.hospitalname;
  return (
    <div>
      <Nav></Nav>
      <h1>{name}</h1>
      hosital details and hospital image from backend
    </div>
  );
}

export default HospitalBeds;

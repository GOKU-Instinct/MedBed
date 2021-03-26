import React from "react";
import Nav from "../Nav";

function Patient() {
  return (
    <>
      <Nav></Nav>
      Enter the aadhar card number
      <input type="text"></input>
      <br></br>
      check in the database if first time enter details else directly book the
      bed with the hospital name.
      If the data of the user is not present send it to patientname route.
    </>
  );
}

export default Patient;

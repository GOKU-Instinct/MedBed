import React from "react";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

function PatientName() {
  return (
    <>
      <Nav></Nav>
      This is one-time registration you have to enter these details. As this is
      one-time registration so that the details can be directly sent to the
      hospital and if any additional things are needed the hospital will be
      asked at that point. You just have to enter the Aadhar card number so that
      the data can be associated with one person only.
      <form id="form" action="">
        <label for="patient_name">Patient Name</label>
        <TextField required name="name" id="patient_name" variant="outlined" />

        <label for="mobile_number">Mobile Number</label>
        <TextField
          required
          name="mobile"
          id="mobile_number"
          inputProps={{ maxLength: 10 }}
          variant="outlined"
        />
        <label for="aadhar_card_number">Aadhar Card Number</label>
        <TextField
          required
          name="aadhar_card_number"
          id="aadhar_card_number"
          inputProps={{ maxLength: 12 }}
          variant="outlined"
        />

        <label for="email">Email</label>
        <TextField required name="email" id="email" variant="outlined" />

        <Button variant="outlined" id="submit-button" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default PatientName;

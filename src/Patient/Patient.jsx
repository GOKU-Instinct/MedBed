import React from "react";
import Nav from "../Nav";
import "./Patient.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100ch",
    },
  },
}));

function Patient() {
  const classes = useStyles();
  return (
    <>
      <Nav></Nav>
      <div className="patient">
        <form>
          <h1>Enter the aadhar card number</h1>
          <TextField
            id="patient_aadhar"
            label="Aadhar Number"
            inputProps={{ maxLength: 12 }}
            variant="outlined"
          />
          <br></br>
          <Button className="patientSubmit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
        <br></br>
        <div className="note">
          Note:All the details entered here are related to the <b>patient</b>{" "}
          only.
        </div>
        check in the database if first time enter details else directly book the
        bed with the hospital name. If the data of the user is not present send
        it to terms and condition then if aggrees forward it to patientname
        route.
      </div>
    </>
  );
}

export default Patient;

import React, { useState } from "react";
import "./Register.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import hospital from "./hospital.png";

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Register() {
  const classes = useStyles();
  const [state, setState] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    setState((prev) => {
      prev = event.target.value;
    });
  };
  return (
    <>
      <div className="register_wrapper">
        <img src={hospital} width="50%" height="50%" />
        <div className="form_wrapper">
          <section>
            <div className="register-heading">
              <h1>Registration</h1>
              <p>Input proper details to get registered</p>
            </div>
          </section>
          <form
            className={classes.formControl}
            id="form"
            action="register"
            method="POST"
          >
            <label for="hospital_name">Hospital Name</label>
            <TextField
              required
              name="hospital_name"
              id="hospital_name"
              variant="outlined"
            />

            <label for="mobile_number">Mobile Number</label>
            <TextField
              required
              name="mobile_number"
              id="mobile_number"
              inputProps={{ maxLength: 10 }}
              variant="outlined"
            />
            <label for="email">Email</label>
            <TextField required name="email" id="email" variant="outlined" />

            {/*<InputLabel htmlFor="state">State</InputLabel>*/}
            <label for="state">State</label>
            <Select
              labelId="demo-simple-select-outlined-label"
              value={state}
              onChange={handleChange}
              inputProps={{
                name: "state",
                id: "state",
              }}
            >
              <option value="35">Andaman &amp; Nicobar Islands</option>
              <option value="28">Andhra Pradesh</option>
              <option value="12">Arunachal Pradesh</option>
              <option value="18">Assam</option>
              <option value="10">Bihar</option>
              <option value="4">Chandigarh</option>
              <option value="22">Chhatisgarh</option>
              <option value="26">Dadra &amp; Nagar Haveli</option>
              <option value="25">Daman &amp; Diu</option>
              <option value="7">Delhi</option>
              <option value="30">Goa</option>
              <option value="24">Gujarat</option>
              <option value="6">Haryana</option>
              <option value="2">Himachal Pradesh</option>
              <option value="1">Jammu and Kashmir</option>
              <option value="20">Jharkhand</option>
              <option value="29">Karnataka</option>
              <option value="32">Kerala</option>
              <option value="31">Lakshadweep</option>
              <option value="23">Madhya Pradesh</option>
              <option value="27">Maharashtra</option>
              <option value="14">Manipur</option>
              <option value="17">Meghalaya</option>
              <option value="15">Mizoram</option>
              <option value="13">Nagaland</option>
              <option value="21">Odisha</option>
              <option value="34">Puducherry</option>
              <option value="3">Punjab</option>
              <option value="8">Rajasthan</option>
              <option value="11">Sikkim</option>
              <option value="33">Tamil Nadu</option>
              <option value="36">Telangana</option>
              <option value="16">Tripura</option>
              <option value="9">Uttar Pradesh</option>
              <option value="5">Uttarakhand</option>
              <option value="19">West Bengal</option>
            </Select>
            <label for="mobile">Street</label>
            <TextField
              required
              name="mobile"
              id="street"
              inputProps={{ maxLength: 10 }}
              variant="outlined"
            />
            <label for="City">City</label>
            <TextField required name="city" id="city" variant="outlined" />

            <label for="password">Password</label>
            <TextField
              required
              name="password"
              id="password"
              type="password"
              variant="outlined"
            />
            <Button variant="outlined" id="submit-button" type="submit">
              Register
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

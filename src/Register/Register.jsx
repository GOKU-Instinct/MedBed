import React, { useState, useContext } from "react";
import "./Register.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import hospitalimg from "./hospital.png";
import axios from "axios";
import { userContext } from "../UserContext";
import { useHistory, Redirect } from "react-router-dom";

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

  let states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"
              ]

  const classes = useStyles();

  let history = useHistory();
  const { setHospitalName } = useContext(userContext);
  let hospital = JSON.parse(localStorage.getItem("hospital"));
  
  const [newHospital, setNewHospital] = React.useState({
    name: "",
    mobile: "",
    email: "",
    beds: "",
    password: "",
    city: "",
    street: "",
    state: ""
  });

  function handleChange (event) {
      const {name, value} = event.target;
      setNewHospital(previousValues => {
          return {
              ...previousValues,
              [name]: value
          }
      })
  }

  function sendData() {
      axios.post("http://localhost:5400/register", newHospital)
      .then(response => {
          if(response.data === "This Hospital is already registered.") {
              window.alert(response.data);
          }
          else {
              localStorage.setItem("hospital", JSON.stringify(response.data));
              setHospitalName("LOGOUT");
              history.push("/");
          }
      })
      .catch(err => {
          console.log(err);
      })
  }


  function submitHospital(event) {
      event.preventDefault();
      sendData();
      setNewHospital({
        name: "",
        mobile: "",
        email: "",
        beds: "",
        password: "",
        city: "",
        street: "",
        state: ""
      });
  }

  if(hospital) {
      return <Redirect to="/"/>
  }

  return (
    <>
      <div className="register_wrapper">
        <img src={hospitalimg} width="50%" height="50%" />
        <div className="form_wrapper">
          <section>
            <div className="register-heading">
              <h1>Registration</h1>
              <p>Input proper details to get registered</p>
            </div>
          </section>
          <form
            id="form"
            action=""
          >
            <label for="hospital_name">Hospital Name</label>
            <TextField
              required
              name="name"
              id="hospital_name"
              variant="outlined"
              value={newHospital.name}
              onChange={handleChange}
            />

            <label for="mobile_number">Mobile Number</label>
            <TextField
              required
              value={newHospital.mobile}
              onChange={handleChange}
              name="mobile"
              id="mobile_number"
              inputProps={{ maxLength: 10 }}
              variant="outlined"
            />
            <label for="email">Email</label>
            <TextField value={newHospital.email} onChange={handleChange} required name="email" id="email" variant="outlined" />

            {/*<InputLabel htmlFor="state">State</InputLabel>*/}
            <label for="state">State</label>
            <Select
              labelId="demo-simple-select-outlined-label"
              inputProps={{
                name: "state",
                id: "state",
              }}
              name="state"
              value={newHospital.state}
              onChange={handleChange}
            >
              {states.map((state, index) => {
                return <option value={state}>{state}</option>;
              })}
            </Select>
            <label for="street">Street</label>
            <TextField
              required
              name="street"
              id="street"
              inputProps={{ maxLength: 20 }}
              variant="outlined"
              value={newHospital.street}
              onChange={handleChange}
            />
            <label for="City">City</label>
            <TextField required name="city" id="city" variant="outlined" onChange={handleChange} value={newHospital.city} />
            <label for="beds">Number of Beds</label>
            <TextField
              required
              name="beds"
              id="beds"
              inputProps={{ maxLength: 15 }}
              variant="outlined"
              value={newHospital.beds}
              onChange={handleChange}
            />
            <label for="password">Password</label>
            <TextField
              required
              name="password"
              id="password"
              type="password"
              variant="outlined"
              value={newHospital.password}
              onChange={handleChange}
            />
            <Button onClick={submitHospital} variant="outlined" id="submit-button" type="submit">
              Register
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

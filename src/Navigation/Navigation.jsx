import React, { useState } from "react";
import "./Navigation.css";
import { userContext } from "../UserContext";
import UpdateBed from "../UpdateBed/UpdateBed";
import Start from "../Start/Start";
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
import HospitalBeds from "../Hospital/HospitalBeds";
import Patient from "../Patient/Patient";
import Terms from "../Terms";
import PatientName from "../PatientName";

function Navigation() {
  const hospital = JSON.parse(localStorage.getItem("hospital"));
  let history = useHistory();
  const [hospitalName, setHospitalName] = useState("LOGIN");

  function logout(event) {
    event.preventDefault();
    setHospitalName("LOGIN");
    localStorage.clear();
  }

  return (
    <userContext.Provider value={{ hospitalName, setHospitalName }}>
      <Router>
        <Switch>
          <Route path="/" exact strict component={Start} />
          <Route path="/home" exact strict component={Home} />
          <Route path="/contact" exact strict component={ContactUs} />
          <Route path="/register" exact strict component={Register} />
          <Route path="/about" exact strict component={AboutUs} />
          <Route path="/login" exact strict component={Login} />
          <Route path="/updatebed" exact strict component={UpdateBed} />
          <Route
            path="/:hospitalname/hospitalbeds"
            exact
            strict
            component={HospitalBeds}
          />
          <Route
            path="/:hospitalname/patient"
            exact
            strict
            component={Patient}
          ></Route>
          <Route
            path="/Termsandconditions"
            exact
            strict
            component={Terms}
          ></Route>

          <Route
            path="/patientdetail"
            exact
            strict
            component={PatientName}
          ></Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default Navigation;

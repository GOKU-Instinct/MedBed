import React, { useContext, useState } from "react";
import "./Login.css";
import { useHistory, Redirect } from "react-router-dom";
import { userContext } from "../UserContext";
import axios from "axios";

function Login() {

  let history = useHistory();
  const hospital = JSON.parse(localStorage.getItem("hospital"));
  const { setHospitalName } = useContext(userContext);

  const [newHospital, setNewHospital] = useState({
    username: "",
    password: ""
  })

  function handleChange(event) {
    const {name, value} = event.target;
    return setNewHospital(previousValues => {
      return {
        ...previousValues,
        [name]: value
      }
    })
  }

  function sendData() {
    axios.post("http://localhost:5400/login", newHospital)
    .then(response => {
      if(response.data === "Incorrect Username or Password. Please try again." || response.data === "This Hospital is not registered. Please register to proceed.") {
          window.alert(response.data);
      }
      else {
          localStorage.setItem("hospital", JSON.stringify(response.data));
          setHospitalName("LOGOUT");
          history.push("/");
      }
    })
  }

  function submitHospital(event) {
    event.preventDefault();
    sendData();
    setNewHospital({
      username: "",
      password: ""
    })
  }

  if(hospital) {
    return <Redirect to="/" />
  }

  return (
    <div class="container">
      <section id="content">
        <form action="">
          <h1>Login to MedBed</h1>
		  <br></br>
		  <br></br>
          <div>
            <input
              name="username"
              type="text"
              placeholder="Username (Email ID)"
              required=""
              id="username"
              onChange={handleChange}
              value={newHospital.username}
            />
          </div>
		  <br></br>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required=""
              id="password"
              value={newHospital.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <input onClick={submitHospital} type="submit" value="Log in" />
            <a href="#">Forgot your password?</a>
            <a href="#">Register</a>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;

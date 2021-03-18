import React, { useState } from "react";
import "../Login/Login.css";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";

function UpdateBed() {

  let history = useHistory();
  const hospital = JSON.parse(localStorage.getItem("hospital"));

  const [bedCount, setBedCount] = useState({
    bedCount: ""
  })

  function handleChange(event) {
    const {name, value} = event.target;
    return setBedCount(previousValues => {
      return {
        ...previousValues,
        [name]: value
      }
    })
  }

  function sendData() {
    axios.post("http://localhost:5400/update/" + hospital._id , bedCount)
    .then(response => {
        // console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
  }

  function updateCount(event) {
    event.preventDefault();
    sendData();
    setBedCount({
      bedCount: ""
    })
    history.push("/");
  }

  if(!hospital) {
    return <Redirect to="/" />
  }

  return (
    <div class="container">
      <section id="content">
        <form action="">
          <h1>Update Bed Count</h1>
		  <br></br>
		  <br></br>
          <div>
            <input
              name="bedCount"
              type="text"
              placeholder="Enter New bed Count"
              required
              id="username"
              onChange={handleChange}
              value={bedCount.bedCount}
            />
          </div>
		  <br></br>
          <div>
            <input onClick={updateCount} type="submit" value="Update" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default UpdateBed;

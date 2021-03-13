import React, { useState } from "react";
import Search from "../Search/Search";
import HospitalList from "../Hospital/HospitalList";
import "./Home.css";
import Map from "../Map/Map";

import Nav from "../Nav";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { MicNone } from "@material-ui/icons";

const hospitals = [
  "Sapna Hospital",
  "Kamla Nehru Memorial Hospital",
  "Srijan Vatsalya Hospital",
  "Priti Hospital",
  "Jeevan Jyoti Hospital",
];

const Location = ["Allahabad", "Pune", "Bareilly"];

const wards = ["General Ward", "CCU", "ICU"];

function Home() {
  const hospital = JSON.parse(localStorage.getItem("hospital"));
  let history = useHistory();
  const [hospitalName, setHospitalName] = useState("LOGIN");

  function logout(event) {
    event.preventDefault();
    setHospitalName("LOGIN");
    localStorage.clear();
  }
  return (
    <>
      <Nav location="/"></Nav>
      <div className="home_wrapper">
        <div className="Search_Box">
          <Search list={Location} id="Location"></Search>
          <Search list={wards} id="Medical Wards"></Search>
        </div>
        <div className="Box">
          <div className="Hospitals">
            <HospitalList list={hospitals}></HospitalList>
          </div>
          <div className="Map">
            <Map></Map>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

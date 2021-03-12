import React from "react";
import Search from "../Search/Search";
import HospitalList from "../Hospital/HospitalList";
import "./Home.css";
import Map from "../Map/Map";
import logo from "./Logo.png";
import circle from "./circle.png";

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
  return (
    <>
      <div className="hero_section">
        <img className="circle" src={circle} />
        <div className="circle1_container">
          <img className="circle1" src={circle} />
        </div>
        <div className="image"></div>
        <div className="main_section">
          <h1>Welcome</h1>
          <p>
            We believe and practice that every patient should be well taken care
            of equally. By being aware of small things can make a huge effect on
            our lives. Through this web application, you will be able to get the
            required ward bed that your patient needs. Don't have to wait in
            long lines.
          </p>
        </div>
      </div>
      <div className="home_wrapper">
        <div className="Search_Box">
          <Search list={Location} id="Location"></Search>
          <Search list={wards} id="Wards"></Search>
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
      <footer className="home_footer">
        <h1>MEDBED</h1>
        <ul>
          <li>Contact</li>
          <li>About</li>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </footer>
    </>
  );
}

export default Home;

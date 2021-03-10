import React from "react";
import Search from "../Search/Search";
import HospitalList from "../Hospital/HospitalList";
import "./Home.css";
import Map from "../Map/Map";

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
      <div className="wrapper">
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
    </>
  );
}

export default Home;

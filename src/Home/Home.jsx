import React from "react";
import Search from "../Search/Search";
import HospitalList from "../Hospital/HospitalList";
import "./Home.css";

const top100Films = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
  "12 Angry Men",
];

function Home() {
  return (
    <>
      <div className="Search_Box">
        <Search id="Location"></Search>
        <Search id="Wards"></Search>
      </div>
      <div className="Box">
        <div className="Hospitals">
          <HospitalList list={top100Films}></HospitalList>
        </div>
        <div className="Map"></div>
      </div>
    </>
  );
}

export default Home;

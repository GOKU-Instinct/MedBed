import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import "./HospitalBeds.css";

function HospitalBeds(props) {
  // get the details of the hospital specified
  const name = props.match.params.hospitalname;
  return (
    <>
      <Nav></Nav>
      <div className="hospital_book">
        <h1>{name}</h1>
        hosital details and hospital image from backend beds available and other
        things
        <button>
          <Link
            to={{
              pathname: `/${name}/patient`,
            }}
          >
            BOOK NOW
          </Link>
        </button>
      </div>
    </>
  );
}

export default HospitalBeds;

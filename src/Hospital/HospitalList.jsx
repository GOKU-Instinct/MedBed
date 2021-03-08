import React from "react";
import Hospital from "./Hospital";

function HospitalList(props) {
  const list = props.list;
  return (
    <>
      {list.map((name) => {
        return <Hospital name={name}></Hospital>;
      })}
    </>
  );
}

export default HospitalList;

import "./Map.css";
import React, { useRef, useEffect, useState } from "react";
import { ReactBingmaps,Pushpin } from "react-bingmaps";
import Marker from "./Marker";

function Map() {
  useEffect(() => {
    
  }, []);
  return (
    <>
      <ReactBingmaps
        bingmapKey="ApwmHib6zc8A0R8TMSw8CbXf14_Qh7Z2AIheCh9reBbSgPsKEPtU33n5NggH-1cA"
        center={[13.0827, 80.2707]}
      ></ReactBingmaps>
    </>
  );
}

export default Map;

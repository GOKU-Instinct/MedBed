import "./Map.css";
import React, { useRef, useEffect, useState } from "react";
import { ReactBingmaps } from "react-bingmaps";
import Marker from "./Marker";

function Map() {
  useEffect(() => {
    // pushPins = [
    //   {
    //     location: [13.0827, 80.2707],
    //     option: { color: "red" },
    //   },
    //   {
    //     location: [19.0827, 80.2707],
    //     option: { color: "red" },
    //   },
    // ];
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

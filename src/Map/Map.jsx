import "./Map.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import Marker from "./Marker";
import ReactDOM from "react-dom";
import fetchFakeData from "./fetchFakeData";

function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2xvdmVyMDA3IiwiYSI6ImNra2ljYjJxZDB2eTcyd3BkaWllZWxiNmEifQ.coxyohLtpS0vlCm_OKjRXg";
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [81.87126799737071, 25.399627335716858],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    // map.on("moveend", async () => {
    // get center coordinates
    const { lng, lat } = map.getCenter();
    // fetch new data
    // const results = await fetchFakeData({ longitude: lng, latitude: lat });
    let location = [
      [81.87126799737071, 25.399627335716858],
      [81.86142802620783, 25.459326680089156],
      [81.84244418387946, 25.45280077140636],
      [81.85422361271549, 25.457624438869768],
    ];
    const results = location;
    console.log(results);
    let val = 1;
    // iterate through the feature collection and append marker to the map for each feature
    results.forEach((result) => {
      // const { id, geometry } = result;
      // create marker node
      const coordinates = result;
      const markerNode = document.createElement("div");
      ReactDOM.render(<Marker id={val} />, markerNode);
      // add marker to map
      val++;
      new mapboxgl.Marker(markerNode).setLngLat(coordinates).addTo(map);
    });
    // });
    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;

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
  const mapContainer = useRef();
  const [lng, setLng] = useState(30.5);
  const [lat, setLat] = useState(50.5);
  const [zoom, setZoom] = useState(5);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    var marker = new mapboxgl.Marker()
      .setLngLat([12.550343, 55.665957])
      .addTo(map);

    // return () => map.remove();
  }, []);

  return (
    <div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
}

export default Map;

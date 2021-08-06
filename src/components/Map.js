import React from "react";
import GoogleMapReact from "google-map-react";

import { ROUTE_NUMBERS_FILTER_OPTIONS } from "./Route";

const graph = ROUTE_NUMBERS_FILTER_OPTIONS[0]["route_graph"].map((r) => r);






const AnyReactComponent = ({ img, place,arrival,fromPrev }) => (
  <div
    style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
  >
    <img src={img} style={{ height: "25px", width: "25px" }} alt="position" />
    <p style={{ color: "yellow", width: "max-content", margin:'1px 0 0 11px' }}>{place} </p>
    <p style={{color: "yellow", width: "max-content",margin:'1px 0 0 11px' }}>arrival time- {arrival}</p> 
    <p style={{color: "yellow", width: "max-content",margin:'1px 0 0 11px', fontWeight:'900' }}>distance from previous source - {fromPrev}</p> 
  </div>
);







const Map = ({ place, center, zoom }) => {
  console.log(place);

  const marker = graph.map((r) => {
    if (place === r.address["street"]) {
   
      const arrival=r.registered_arrival_time
      const fromPrev=r.distance_from_prev_stop['text']
      return (
        <AnyReactComponent
          lat={r.geo_location.latitude}
        
          lng={r.geo_location.longitude}
          place={place}
          img="./img/index.png"
          arrival={arrival}
          fromPrev={fromPrev}

        />
      );
    }
    return null;
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "75vh", width: "80%" }} className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA3aI_dMmdhdPS1IEkAUyJEUyRvoYwBc00" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {marker}
      </GoogleMapReact>
      <h1 style={{ margin: "0" }}>STREET-ADDRESS - {place}</h1>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.270017,
    lng: -71.623672,
  },
  zoom: 11,
};

export default Map;

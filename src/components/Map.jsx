"use Strict"
import React from "react";
import '../index.css'

import { GoogleMap, LoadScript } from "@react-google-maps/api";
const containerStyle = {
    width: "97%",
    height: "650px",
    marginTop: "3%",
    marginLeft:"1%"
    
  
  };
  
  const center = {
    lat: 37.7749,
    lng: -122.4194
  };
  
function Map(){

   return(
    <div className="">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap  mapContainerStyle={containerStyle}  options={{mapTypeControl:false,fullscreenControl:false,streetViewControl:false,keyboardShortcuts:false,}} center={center} zoom={14}>
 
        </GoogleMap>
      </LoadScript>

    </div>
        

    )
}
export default Map;
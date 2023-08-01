import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper,Typography,useMediaQuery } from "@mui/material";
import Rating from "@mui/material";
import { GoogleMap } from "@react-google-maps/api";


const Map = () =>{
    const isMobile=useMediaQuery('(min-width:600px')

    const coordinates ={lat:0,lng:0};
    return(
        <div  style={{ height: "400px", width: "100%" }}>
           
            <GoogleMapReact
         bootstrapURLKeys={{key }} 
        defaultCenter={coordinates}
        defaultZoom={14}
      >
        
      </GoogleMapReact>


        </div>
    )
}
export default Map;
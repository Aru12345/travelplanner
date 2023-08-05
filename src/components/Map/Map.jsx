import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper,Typography,useMediaQuery } from "@mui/material";
import Rating from "@mui/material";
import { GoogleMap } from "@react-google-maps/api";


const Map = ({setCoordinates,setBounds,coordinates}) =>{
    const isMobile=useMediaQuery('(min-width:600px')

    return(
        <div  style={{ height: "400px", width: "100%" }}>
           
            <GoogleMapReact
         bootstrapURLKeys={{key :}} 
        defaultCenter={coordinates}
        defaultZoom={14}
        center={coordinates}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e)=>{
            setCoordinates({lat: e.center.lat, lng:e.center.lng})
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''} 
      >
        
      </GoogleMapReact>


        </div>
    )
}
export default Map;
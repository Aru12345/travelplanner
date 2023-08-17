import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "97%",
  height: "680px",
  marginTop: "3%",
  marginLeft: "1%",
};

const center = {
  lat: 20,
  lng: 10, 
};

function Map({ places ,setChildClicked}) {
  const scrollToCard = (index) => {
    setChildClicked(index); // Set the childClicked state to the index of the clicked marker
    const cardElement = document.getElementById(`card-${index}`);
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            keyboardShortcuts: false,
          }}
          center={center}
          zoom={2}
          minZoom={1}
          onClick={scrollToCard}
          
        >
          {places?.map((place, i) => (
            <Marker
              key={i}
              position={{ lat: Number(place.latitude), lng: Number(place.longitude) }}
              icon={{
                url: place.image,
                scaledSize: new window.google.maps.Size(50, 55), 
              }}
              title={place.name} 
             zIndex={1000}
             onClick={scrollToCard}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;

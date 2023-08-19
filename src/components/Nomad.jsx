import CardList from "./Cardlist";

import Map from "./Map";
import { useState } from "react";
function Nomad({places, setPlaces}){
    return(
        <>
        <div className="flex flex-col md:flex-row ">
         <div className="w-[40%] md:w-2/5 p-4 max-sm:w-[80%] max-sm:ml-[10%] " >
          <div className=" mb-4  ">
       
           <div className="overflow-auto max-h-[670px] mt-3">
             <CardList places={places} />
            </div>
          </div>
         </div>
          <div className="w-[60%] pl-3% ml-2% m:w-[80%] sm:ml-[10%]  sm:h-[40%] max-sm:w-[90%] max-sm:ml-[4%]   ">
            <Map  places={places}  setPlaces={setPlaces} /> 
           </div>
       </div>
     </>
    )
}
export default Nomad;
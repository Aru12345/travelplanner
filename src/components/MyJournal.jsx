import { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import TripCard from "./TripCard";

function MyJournal() {
   const[trips,setTrips]=useState([]);
 
   async function getTrips() {
      try {
         const response = await axios.get("http://localhost:3000/trips");
        setTrips(response.data);
      }
      catch (error) {
         console.log(error);
      }
   }
      
   useEffect(() => {
      getTrips();
    }, []); 
  
  return (
    <div className="flex  flex-wrap justify-center pl-1  h-screen">
      <div className="w-2/4 max-sm:w-[80%] max-sm:ml-[10%]  py-3">
        <h1 className="text-lg font-semibold text-center mt-0 p-1">Plan your trip...🗺️</h1>

        <div className="w-4/5 mx-auto  flex flex-col justify-center items-center p-3 ">
          <div className="w-full">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-900">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              className="w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full mt-3">
            <label htmlFor="departureDate" className="block text-sm font-medium text-gray-900">
              Date of Departure
            </label>
            <input
              type="date"
              name="departureDate"
              id="departureDate"
              className="w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full mt-3">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-900">
              Budget and Expenses
            </label>
            <input
              type="text"
              name="budget"
              id="budget"
              className="w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full mt-3">
            <label htmlFor="accommodation" className="block text-sm font-medium text-gray-900">
              Accommodation
            </label>
            <input
              type="text"
              name="accommodation"
              id="accommodation"
              className="w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full mt-3">
            <label htmlFor="activitiesAndNotes" className="block text-sm font-medium text-gray-900">
              Activities and Notes
            </label>
            <textarea
              name="activitiesAndNotes"
              id="activitiesAndNotes"
              rows="3"
              className="w-full h-20 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          <div className="w-full mt-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      
      <div className="w-8.5  py-3 w-2/4 max-sm:w-[80%] max-sm:ml-[10%]  h-305 ">
     
        <h1 className="text-lg font-semibold text-center overflow-auto  p-1">My Trips</h1>
          <div className="w-4/5  xs:w-full ">
           
          
           {trips.map((trip, i) => (
    <TripCard trip={trip} key={i} />
  ))}
         
        </div>
      </div>
    </div>
  );
}

export default MyJournal;

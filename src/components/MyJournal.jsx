import { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import TripCard from "./TripCard";

function MyJournal() {
   const[trips,setTrips]=useState([]);
   const [formData,setFormData]=useState({
      destination:'',
      date:'',
      budget:'',
      accomodation:'',
      notes:''
   })

   function handleChange(e){
      setFormData({...formData, [e.target.name]: e.target.value})
   }
   function handleSubmit(e) {
      e.preventDefault();
  
      const newTrip ={  ...formData}
        
    
      axios.post('http://localhost:3000/trips', newTrip)
      .then(function (response) {
        console.log("Response data:", response.data);
        const newTripData = response.data;

        setTrips([...trips, newTripData]);

      // Clear the form fields
      setFormData({
        destination: '',
        date: '',
        budget: '',
        accomodation: '',
        notes: ''
      });
      })
      .catch( (error)=> {
         console.log(error);
      });
        
    }
    
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

    function handleDelete(id) {
      setTrips(trips.filter(trip => trip.id !== id));
    }
  return (
<>
    <div className="flex  flex-wrap justify-center pl-1  h-screen">
      <div className="w-2/4   py-3">
        <h1 className="text-lg font-semibold text-center mt-0 p-1">Plan your trip...🗺️</h1>

        <div className="w-4/5 mx-auto  justify-center items-center p-3 ">
        <form>
          <div className="">
         
            <label htmlFor="destination" className="block text-sm font-medium text-gray-900">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              value={formData.destination} onChange={handleChange} 
              className="w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full mt-3">
            <label htmlFor="departureDate" className="block text-sm font-medium text-gray-900">
              Date of Departure
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date} onChange={handleChange} 
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
              value={formData.budget} onChange={handleChange} 
              className="w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full mt-3">
            <label htmlFor="accommodation" className="block text-sm font-medium text-gray-900">
              Accommodation
            </label>
            <input
              type="text"
              name="accomodation"
              id="accomodation"
            
              value={formData.accomodation} onChange={handleChange} 
              className="w-full h-8 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full mt-3">
            <label htmlFor="activitiesAndNotes" className="block text-sm font-medium text-gray-900">
              Activities and Notes
            </label>
            <textarea
              name="notes"
              id="notes"
              rows="3"
              value={formData.notes} onChange={handleChange} 
              className="w-full h-20 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          <div className="w-full mt-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleSubmit}
            >
              Add
            </button>  
          </div>
          </form>
        </div>
       
      </div>
      <div className="w-8.5  py-3 w-2/4 max-sm:w-[80%] max-sm:ml-[10%]  h-305 ">
        <h1 className="text-lg font-semibold text-center    p-1">My Trips</h1>
          <div className="w-4/5  xs:w-full h-4/6 overflow-auto ">
           {trips.map((trip, i) => (
    <TripCard  trip={trip} key={i} onDelete={handleDelete} />
  ))}
         
        </div>
      </div>
    </div>
    </>
  );
 
}

export default MyJournal;

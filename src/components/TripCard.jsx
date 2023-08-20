import "../index.css"
import axios from "axios";
function TripCard({trip, onDelete}){
    function deleteCard(){
        axios.delete(`http://localhost:3000/trips/${trip.id}`)
  .then(response => {
    onDelete(trip.id)
  })
  .catch(error => {
    console.error(error);
  });
    }
    return(
        <>
        
         <div className=" bg-custom-gradient justify-center mt-1 text-white rounded  ml-16  px-7   items-start p-2">
         <button onClick={deleteCard} className="bg-blue-600 rounded-sm w-5" h-3>X</button>
        <h1>Trip: {trip.id}</h1>
        <h1>Name :  {trip.destination}</h1>
        <h1>Date: {trip.date}</h1>
        <h1>Budget : ${trip.budget}</h1>
        <h1>Acomodation : {trip.accomodation}</h1>
        <h1>Activites and Notes : {trip.notes}</h1>
        </div>
        </>
    )
}
export default TripCard;
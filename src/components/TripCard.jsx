import "../index.css"
function TripCard({trip,i}){
    return(
        <>
         <div className=" bg-custom-gradient justify-center  text-white rounded  ml-16  px-7   items-start p-2">
        <h1>Trip: {trip.id}</h1>
        <h1>Name :  {trip.destination}</h1>
        <h1>Date: {trip.date}</h1>
        <h1>Budget : {trip.budget}</h1>
        <h1>Acomodation : {trip.accomodation}</h1>
        <h1>Activites and Notes : {trip.notes}</h1>
        </div>
        </>
    )
}
export default TripCard;
import { useEffect,useRef,useState } from "react";
import '../index.css'
import {useNavigate} from "react-router-dom"
function Card ({place,cardId}){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nav =(e) =>{
    navigate('/journal')


  }

    return(
        <>
    
       <div  id={cardId} className={`bg-custom-gradient } text-white ml-5 my-2 rounded-md p-3`}>
       <img src={place.image} alt={place.name}/>
          
       
      
       <h1>Name:{place.name}</h1>
       <h2>Country:{place.country}</h2>
        <h2>Region:{place.region}</h2>
        
        <button onClick={openModal} className="bg-blue-700 px-3 m-1 rounded" >View</button>
      
        </div>
        {isModalOpen && (
        <div className="modal omodal">
          <div className="modal-content">
          <button onClick={closeModal}  className="bg-blue-700 px-3 m-1 ml-150 rounded ">X</button>
          <img src={place.image} alt={place.name}/>
          <h1>Name:{place.name}</h1>
        <h2>Population:{place.population}</h2>
        <h2>Humidity:{place.humidity}</h2>
         <h2>Internet Speed:{place.internet_speed}</h2>
         <h2>Tempreture:{place.temperatureC} {place.weather_emoji}</h2>
         <h2>Cost per Head$:{place.cost_for_local_in_usd}</h2>
         <h2>Air Quality: {place.air_quality_score}</h2>
         <h2>Safety Level: {place.safety_level}</h2>
         <h2>Leisure Quality:{place.leisure_quality}</h2>
         <button onClick={nav}  className="bg-blue-700 px-3 m-1 rounded">Add to Journal</button>
      
          </div>
        </div>
      )}
        </>
    )
}
export default Card;
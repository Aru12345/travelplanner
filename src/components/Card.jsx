import { useEffect,useRef } from "react";
import '../index.css'
function Card ({place,childClicked,cardId}){
    const cardRef = useRef(null);
    useEffect(() => {
        if (childClicked === place.id) {
          cardRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, [childClicked, place.id]);

    return(
        <>
    
       <div ref={cardRef} id={cardId} className={`bg-custom-gradient ${childClicked ? 'highlight-card' : ''} text-white ml-5 my-2 rounded-md p-3`}>


             <img src={place.image} alt={place.name}/>
          
       
      
       <h1>Name:{place.name}</h1>
       <h2>Country:{place.country}</h2>
        <h2>Region:{place.region}</h2>
        <h2>Population:{place.population}</h2>
        
       <h2>Humidity:{place.humidity}</h2>
        <h2>Internet Speed:{place.internet_speed}</h2>
        <h2>Tempreture:{place.temperatureC} {place.weather_emoji}</h2>
        <h2>Cost per Head$:{place.cost_for_local_in_usd}</h2>
        <h2>Air Quality: {place.air_quality_score}</h2>
        <h2>Safety Level: {place.safety_level}</h2>
       
        </div>
        </>
    )
}
export default Card;
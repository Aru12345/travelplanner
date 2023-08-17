import Card from "./Card";
import { useEffect,useRef } from "react";

function CardList({ places,childClicked }) {
   console.log({childClicked})
    return (
      <div className=" "> 
        
        {places.map((place, i) => (
            
          <Card  place={place} key={i} childClicked={childClicked === i}
          cardId={`card-${i}`} />
        ))}
      </div>
    );
  }
  
  export default CardList;
import Card from "./Card";
import { useEffect,useRef } from "react";

function CardList({ places,childClicked }) {

    return (
      <div className=" "> 
        
        {places.map((place, i) => (
            
          <Card  place={place} key={i}
          cardId={`card-${i}` }  cardRef={`cardRef-${i}`}/>
        ))}
      </div>
    );
  }
  
  export default CardList;
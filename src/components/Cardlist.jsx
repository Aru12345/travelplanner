import Card from "./Card";
function CardList({ places }) {
    return (
      <div>
        
        {places.map((place, i) => (
          <Card place={place} key={i} />
        ))}
      </div>
    );
  }
  
  export default CardList;
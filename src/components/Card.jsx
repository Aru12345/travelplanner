function Card ({place}){
    return(
        <>
       
       <img src={place.image} alt={place.name}/>
       <h1>Name:{place.name}</h1>
       <h2>Country:{place.country}</h2>
        <h2>Region:{place.region}</h2>
        <h2>Population:{place.population}</h2>
        
       
        <h2>Internet Speed:{place.internet_speed}</h2>
        <h2>Tempreture:{place.temperatureC}</h2>
        <h2>Cost per Head$:{place.cost_for_local_in_usd}</h2>
        <h2>Air Quality:{place.air_quality_score}</h2>
       
        
        </>
    )
}
export default Card;
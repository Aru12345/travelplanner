import CardList from "./Carlist";
import Search from "./Search";
import Map from "./Map";
function Nomad(){
    return(
        <>
        <div className="flex">
       <div className="w-[40%] p-4" >
       <div className="mb-4">
          <CardList />
          <Search />
        </div>
       </div>
       

<div className="w-[60%] p-4 ml-17">
<Map /> 
</div>
       
       

        </div>

       
        </>
    )
}
export default Nomad;
import { Autocomplete } from "@react-google-maps/api";
function Search(){
    return(
        <>
     
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> */}
                {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> */}
            {/* </svg> */}
        
        <input type="search" id="default-search" class="block w-4/5 p-4 pl-10 ml-14 rounded-md text-sm border-gray-300  border border-rounded" placeholder="Search ..." />

    </div>
</form>

        


        </>
    )
}
export default Search;
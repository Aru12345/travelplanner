
import "../index.css"
function MyJournal() {
   return (
   <>
    <div className=" mt-4  flex  flex-wrap ">
      <div className="w-[40%]  mx-20 pl-25 text-lg font-semibold ">
      <h1 >Plan your trip...🗺️</h1>
      </div>
      
      <div className=" w-[40%]  mx-20 pl-25  ">
           <div className="m-3 " > 
            <label
               htmlFor="destination"
               className="block text-sm font-medium justify-center  leading-6 text-gray-900"
            >
               Destination
            </label>
            <input
               type="text"
               name="destination"
               id="destination"
               className="block w-2/4 justify-center  h-8 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            />
            </div>
            <div className="m-3">
            <label
               htmlFor="departureDate"
               className="block text-sm font-medium leading-6 text-gray-900"
            >
               Date of Departure
            </label>
            <input
               type="date"
               name="departureDate"
               id="departureDate"
               className="block  h-8   w-2/4  rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div className="m-3">
            <label
               htmlFor="budget"
               className="block text-sm font-medium leading-6 text-gray-900"
            >
               Budget and Expenses
            </label>
            <input
               type="text"
               name="budget"
               id="budget"
               className="block  h-8  w-2/4  rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div className="m-3">
            <label
               htmlFor="accommodation"
               className="block text-sm font-medium leading-6 text-gray-900"
            >
               Accommodation
            </label>
            <input
               type="text"
               name="accommodation"
               id="accommodation"
               className="block  h-8  w-2/4  rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div className="m-3"> 
            <label
               htmlFor="activitiesAndNotes"
               className="block text-sm font-medium leading-6 text-gray-900"
            >
               Activities and Notes
            </label>
            <input
               type="paragraph"
               name="activitiesAndNotes"
               id="activitiesAndNotes"
               className="block  h-7  w-2/4  rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div>
            <button
               type="submit"
               className="bg-blue-600 text-white px-4 py-2 rounded-md m-3"
               
            >
               Add
            </button>
            </div>
           

      </div>
              

            
            <div>

        
         </div>
 </div>   
 </>
   )
}
export default MyJournal;
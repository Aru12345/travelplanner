"use Strict"
import React from "react";
import '../index.css'

const Header = () =>{
    return(
      <>
        <div className="bg-custom-gradient flex flex-col md:flex-row justify-between ">
        <div className="md:flex md:space-x-3 md:space-y-0 flex-col md:flex-row m-5 mx-2 px-1">
          <a className="text-white mt-3 md:mt-0 p-3 text-lg font-bold" href="/">
            Home
          </a>
          <a className="text-white my-1 p-3 text-lg font-bold" href="/nomad">
            Explore
          </a>
          <a className="text-white my-1 p-3 text-lg font-bold" href="/comparison">
            Comparison
          </a>
        </div>

        <p className="flex-row-reverse text-2xl font-bold text-white mt-1 md:mt-3 ml-4 md:ml-0 m-3 p-1 px-2 pt-4">
          NomadConnect 🌎
        </p>
      </div>
       </>
    )
}
export default Header;

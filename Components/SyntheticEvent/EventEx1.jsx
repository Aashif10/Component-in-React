/* eslint-disable no-unused-vars */
import React from 'react'

const EventEx1 = () => {

    let handdleClick=(e)=>{
         
        // console.log("Aashif")
        console.log(e.target.style)
        e.target.style.background="green"
        // e.target.style.color="red"
        e.target.style.width = "200px";
        e.target.style.height = "200px";


    }
   
  return <div>
      <button onMouseOver={handdleClick}onMouseLeave={handdleClick} className="border-2">
        Click
      </button>
      <input type="text" onClick={handdleClick} className="border-2" />
      <h1 onClick={handdleClick} className="border-2">
        H1 Tag
      </h1>
    </div>;
}

export default EventEx1
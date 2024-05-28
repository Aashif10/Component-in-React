/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const EventsEx3 = () => {
    let [state, setState] = useState("");

    let handlechange = (e) => {
        console.log(e.target.value);
        setState(e.target.value);
    }
    let[sir,sirname]=useState("")
    let handle = (e) => {
        console.log(e.target.value)
        sirname(e.target.value)
    }
    let handleSubmit = e => {
      e.preventdefault();
    };
    return <div>
        <form action="onSubmit={handleSubmit}" />
        <input type="text"  style={{ border: "2px solid black" }} onChange={handlechange} />
        <h1>
          Name:{state}
        </h1>
           
        <input type="text" style={{ border: "2px solid black" }} onChange={handle} />
        <h1>
          SurName:{sir}
        </h1>
        <button style={{border:"2px solid black"}}>submit</button>
    </div>;
}

export default EventsEx3
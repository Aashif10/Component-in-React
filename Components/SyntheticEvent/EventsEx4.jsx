/* eslint-disable no-unused-vars */
import React from 'react'

const EventsEx4 = () => {
    let handleDown = (e) => {
        e.target.style.width = "100vh";
    }
    let handleup = (e) => {
        e.target.style.backgroundColor = "red";
    }

  return (
      <div>
           
          <input type="text" style={{border:"2px solid black"}} onKeyDown={handleDown} onKeyUp={handleup} />


    </div>
  )
}

export default EventsEx4
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Color1 = () => {
    let [color, setcolor] = useState("white");
    let body = document.body;
    body.style.backgroundColor = color;
  return (
      <div>
          <div>
              <button>Red</button>
          </div>
      
      
      </div>
  )
}

export default Color1
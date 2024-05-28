/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const EvenstsEx6 = () => {
    let [set, setText] = useState('');
    let handle = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
  return (
      <div>
          {/* checkbox */}
      {/* Textarea */}
      
      {/* <input type="checkbox"  onChange={handle} />  */}

          {/* <input type="radio" onClick={handle} /> */}
          <h1>TextArea:{set }</h1>
          <input type="password" onChange={handle} style={{border:"2px solid red"}}/>
          

      </div>
  )
}

export default EvenstsEx6
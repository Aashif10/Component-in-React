/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react'

const UseState4 = () => {
    let [number, setNumber] = useState(0);
    let handle = () => {
        let random = Math.floor(Math.random() * 10000);
        setNumber(random);
    }

  return (
      <div>
          <h1>OTP Generate:{number}</h1>
          <button onClick={handle} className='border-4 text-red-600'>Generate</button>
      
      
      
      
      </div>
  )
}

export default UseState4
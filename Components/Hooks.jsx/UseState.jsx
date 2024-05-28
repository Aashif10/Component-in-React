/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const UseState = () => {

    let [count, setCount] = useState(0);

    let Increment = () => {
        setCount(count + 1);
    }
    let Decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    let Reset = () => {
        setCount(200);
    }

  return (
      <div>
          <h1>count:{count}</h1>
          <button onClick={Increment} className='border-4 text-blue-500'>Increment</button>
          <button onClick={Decrement} className='border-4 text-blue-500' >Decrement</button>
          <button onClick={Reset} className='border-4 text-blue-500' >Reset</button>
      </div>
      
  )
}

export default UseState
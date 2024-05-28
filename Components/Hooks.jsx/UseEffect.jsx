/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react"
import React from "react"

const UseEffect = () => {
    let [count,setCount] = useState(0);
    let handle = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        console.log("useEffect is Here")
         })



  return (
      <div>
          <h1>Count:{count}</h1>
          <button onClick={handle} style={{border:"2px solid black",padding:"5px"}}>Click</button>
      </div>
  )
}

export default UseEffect
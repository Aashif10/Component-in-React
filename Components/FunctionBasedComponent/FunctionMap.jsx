/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react"
const FunctionMap = () => {


let arr =["Aashif","Arshad"]

  return (
      <div>
          
          <div>{arr.map((value) => {
              return <h1>{value}</h1>
          })}</div>
      
      </div>
  )
}

export default FunctionMap
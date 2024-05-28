/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react'

const UseState3 = () => {

    let[Toggle,setState]=useState("None")
    let handle = () => {
        setState(Toggle="True")
    
    }
    let handle1 = () => {
        setState(Toggle="False")
    }
    return <div>
        <div id="container">
          <h1 id="h1">
            Toggle:{Toggle}
          </h1>
          <button onClick={handle} id="button">
            ON
          </button>
          <button onClick={handle1} id="button">
            OFF
          </button>
        </div>
      </div>
}

export default UseState3
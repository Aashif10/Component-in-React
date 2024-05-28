// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const UseState2 = () => {
    let[toggle,setToggle] = useState(false)
    let handletoggle = () => {
        setToggle(!toggle)
       
    }
   
    return <div>
        <button onClick={handletoggle} className='text-red-600 font-extrabold border-y-lime-300'>{toggle ? "ON":"OFF"}</button>
      </div>;
}

export default UseState2
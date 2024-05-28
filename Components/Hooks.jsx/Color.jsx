// eslint-disable-next-line no-unused-vars
import React from 'react'

const Color = () => {

    let body = document.body;
    let handle = () => {
        body.style.backgroundColor = "red";
    }
    let handle1 = () => {
        body.style.backgroundColor="green"
    }
    let handle2 = () => {
        body.style.backgroundColor="yellow"
    }

  return <div>
      <div className='flex justify-center gap-5 '>
        <button onClick={handle}>Red</button>
        <button onClick={handle1}>Green</button>
        <button onClick={handle2}>Yellow</button>
      </div>
    </div>;
}

export default Color
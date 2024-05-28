/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


const Child = (props) => {
    
    // console.log(props);
  return (
    <div>

      <h1>My Name is:{ props.props.Name}</h1>

    </div>
  )
}

export default Child
/* eslint-disable react/prop-types */

import Child2 from "./Child2"

const Child1 = (props) => {
  // console.log(props.props.props.car)
  return (
    <div>
       <Child2 props={props}></Child2>

    </div>
  )
}

export default Child1
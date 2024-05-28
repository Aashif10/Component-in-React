/* eslint-disable no-unused-vars */
import React from "react";
import Child from "./Child";

const Parent = () => {
  let object = {
    car: "Furtuner",
      bike: "Bullets",
    Name:"Aashif"
  };

  return (
    <div>
          <Child props={ object} />
    </div>
  );
};

export default Parent;

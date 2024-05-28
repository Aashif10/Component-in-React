/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Functionbased1 = () => {
  const [count, setcount] = useState(0);

  let handleInc = () => {
    setcount(count + 1);
  };

  let Decrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  let Reset = () => {
    setcount(0);
  };

  return <div>
      <div className="text-center  gap-5  w-[96rem] h-[48.5rem] bg-red-400 ">
        <h1 className="text-[2rem]  text-black-600  font-serif font-semibold">
          Count:{count}
        </h1>
        <button onClick={handleInc} className="text-center border-2 bg-gray-800 text-white font-serif font-semibold rounded-xl py-2 px-4 ">
          Increment
        </button>
        <button onClick={Decrement} className="text-center border-2 bg-gray-800 text-white font-serif font-semibold rounded-xl  py-2 px-4">
          Decrement
        </button>
        <button onClick={Reset} className="text-center border-2 bg-gray-800 text-white font-serif font-semibold rounded-xl py-2 px-4">
          Reset{" "}
        </button>
      </div>
    </div>
};

export default Functionbased1;



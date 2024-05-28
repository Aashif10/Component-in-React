
import Child from "./Child"
const Parent = () => {
  
//   let details=  {
//     name: "Aashif",
//     Age:"33"

  // }
  // let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  let Hello = () => {
   console.log("This is Arrow funtion")
 }
  return <div>
      <Child props={Hello} />
    </div>;
}

export default Parent
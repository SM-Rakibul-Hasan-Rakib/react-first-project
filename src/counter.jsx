import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0)
 
const handleAdd = () =>{
  const newCount = count + 1;
  setCount(newCount)
}
const handleReduce = () =>{
  const reduce = count - 1;
  setCount(reduce)
}
   
  return (
   <div style={{border: '2px solid yellow'}}>
    <h3 style={{fontSize: '5xl', bottom: '10px'}}>Counter : {count}</h3>
    <button  onClick={handleAdd} style={{bottom:'10px'}}>Add</button>
    <button onClick={handleReduce}>Reduce</button>
   </div>
)}

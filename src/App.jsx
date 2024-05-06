import { useEffect } from "react";
import { useState } from "react"

export default function App() {
  const [count,setCount] = useState(0);
  const clickme = () => {
    setCount(count+1);
  }
  return (
    <>
    
    <h1 className="text-3xl text-center font-bold underline">
      Total Coding Problems
    </h1>
    <h3 className="text-3xl text-center font-bold underline">
      Total Count = <button className="border border-4 p-5" onClick={clickme}>{count}</button>
    </h3>
    </>
  )
}
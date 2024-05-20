import React, { useEffect, useState } from 'react'

function UseEffectOne() {
  const [count, setCount] = useState(0)
  const [togle, setTogle] = useState(true)
  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const resizeHandler = ()=>{
      setPageWidth(window.innerWidth)
    }
    window.addEventListener("resize", resizeHandler)
    console.log("Hello i'm using UseEffect", count);
    return ()=>[
      window.removeEventListener("resize", resizeHandler)
    ]
  })
  return (
    <div>
        <h1>UseEffectOne</h1>
        <h1>Count {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <h1 onClick={()=>setTogle(!togle)}>{togle ? "Open" : "Close"}</h1>
        <h1>{pageWidth}</h1>
    </div>
  )
}

export default UseEffectOne
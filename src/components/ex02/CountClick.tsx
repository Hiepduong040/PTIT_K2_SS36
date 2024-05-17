import React, { useEffect, useState } from 'react'

export default function CountClick() {
    const [count,setCount]=useState<number>(0)
    const handleClick = ()=>{
        setCount(count+1)
        console.log(count);
        
    }
    useEffect(()=>{
        document.title= `Click ${count} lần`
    })
  return (
    <div>Bài 2:
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

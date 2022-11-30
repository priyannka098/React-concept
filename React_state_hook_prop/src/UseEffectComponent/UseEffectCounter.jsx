import {useState,useEffect}from 'react';
import React, { Component } from 'react';


function UseEffectCounter() {
    const[count,setCounter]=useState(0)
    const [data,setData]=useState("priyanka")

    useEffect(()=>{
      console.log("component Mounted")
    },[data])

const  updateCount=()=> {
  setCounter(count+1)
 
}
const Update=()=>{
   setData("priya")
}

  return (
    <div className="">
        <h1>Counter:{count}</h1>
        <button onClick={updateCount}>Click</button>
         <button onClick={Update}>Update</button>
    </div>
  )
}

export default UseEffectCounter;





 
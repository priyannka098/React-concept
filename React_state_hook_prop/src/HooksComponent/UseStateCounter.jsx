// Counter using functional component

import React, { Component } from 'react';
import { useState } from 'react';
import './UseStateCounter.css';

 function UseStateCounter  (){
  let[counter,setCounter]=useState(0);


const Increment =()=>{
  setCounter(
    counter+5
  )}
 const Decrement =()=>{
  setCounter(
    counter-1
   )
}
// its second way to write in setstate --we pass argument and function body to Setcounter
// const Decrement=()=>{
//   setCounter(prevCount=>prevCount+1)
// }
const Reset=()=>{
  setCounter(0)
  
}
//User previous state in react hooks- second form of setcount function
const  IncrementFive=()=>{
 for( let i=0;i<5;i++){
    setCounter(prevCount=>prevCount+5)
 }
}

    return (
        <>
    <div className="Counter" >
      <span className="count">Count:{counter}</span> 
      <div>
      <button  className="buttons"onClick={Increment}>Increment</button>
      <button className=" buttons" onClick={Decrement}>Decrement</button>
      <button className="buttons"onClick={Reset}>Reset</button>
      <button className="buttons" onClick={IncrementFive}>Increment 5</button>
      </div>
      </div>
    
      </>
    )
  }


export default UseStateCounter;
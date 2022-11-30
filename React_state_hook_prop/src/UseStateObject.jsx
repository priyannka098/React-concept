//UseState with object

import React from "react"; 
 import { useState } from "react";
 import './UseStateObject.css';


function UseStateObject() {
    const[name,setName]=useState({firstName:'priyanka',lastName:'kumari'})

    const Update=()=>{
      setName({...name,lastName:'pranay'})
      //here ... is spread operator which make the copy of name object and overides the last name ,not change the whole data
      
    }

  return (
    <>
    <div className="container">
      {/* <input  type="text" value={name.first1}></input>
      <input type="text" id="lname"></input> */}
      <h3> Your first name is -{name.firstName}</h3>
      <h3> Your last name is-{name.lastName}</h3>
      <button  className="update" onClick={Update}> Update</button>



    </div>
    
    </>
  )
}

export default UseStateObject;
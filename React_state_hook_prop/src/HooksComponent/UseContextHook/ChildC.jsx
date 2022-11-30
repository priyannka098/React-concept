import React, { useContext } from 'react'
import{data,data1} from './ContextParent'

function ChildC() {
    const firstname= useContext(data);
    const gender=useContext(data1);
  return (
    <>
    <h1>Hello! I am {firstname} and my current age is{gender}</h1>
    </>
    
  )
}

export default ChildC;
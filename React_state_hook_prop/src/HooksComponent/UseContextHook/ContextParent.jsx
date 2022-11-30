import React, { createContext } from 'react'
import ChildA from './ChildA'

const data=createContext();
const data1=createContext();

function ContextParent() {
    const name="priyanka"
    const age="27" 

  return (
    <>
    <data.Provider  value={name}>
        <data1.Provider value={age}>
    <ChildA/>
    </data1.Provider>
    </data.Provider>
    </>
  )
}

export default ContextParent;
export {data,data1};
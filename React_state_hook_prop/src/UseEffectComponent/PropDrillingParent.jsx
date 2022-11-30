//Prop drillinfd and context API Implementation

import React,{createContext} from 'react';
import PropDrillingChildA from './PropDrillingChildA';

const data=createContext();
const data1=createContext();

function PropDrillingParent() {
    const name="priya"
    const gender="female"
    
  return (
    <>
    {/* <ChildA name={name}/>  -transfer props fro prop drilling concept*/}
    <data.Provider value={name}>
    <data1.Provider value={gender}>
    {  <PropDrillingChildA/> /*sare components jise data ko access karwane ki jarurat hai usme wrap kar rai hu data */}
    </data1.Provider>
    </data.Provider>
    </>
       
  )
  }
export default PropDrillingParent;
export {data,data1};


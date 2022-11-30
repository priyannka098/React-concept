import React from "react";
import {Routes, Route } from "react-router-dom";
import ContactUs from "./Component/ContactUs";
import Home from "./Component/Home";
import About from "./Component/About";

function App() {
  return (
    <Routes>
      <Route  path='/'  element={ <Home/>}/> 
      <Route  path='/contact'element={< ContactUs/>}/>
      <Route  path='/about'  element={<About/>}/>
    </Routes>
    
  )
}

export default App;
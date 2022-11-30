import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

//implemention of  use navigate hook

// function Home() {
//     const navi=useNavigate()   // Implementation of UseNavigate hook
//     const goToAbout=()=>{
//         navi('/about')

    // }
//   return (
//     <>
//     <div>Home page</div>
//     <button onClick={goToAbout}> About page</button>
//      {/* <Link to="/about"> About</Link>             //Link tag implementation
//     <Link to="/contact"> contact us</Link> */}
//     </> 

//   )
// }




//how to pass data with useNavigate hook

function Home() {
    const id=10;
    const navi=useNavigate() 
    
        const goToAbout=()=>{
            navi('/about',{state:{data:id}})
    
     }
      return (
        <>
     <div>Home page</div>
       <button onClick={goToAbout}> About page</button>
        {/* <Link to="/about"> About</Link>         //Link tag example
        <Link to="/contact"> contact us</Link> */}
        </> 
    
      )
 }




export default Home
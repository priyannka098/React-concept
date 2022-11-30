import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function About() {
    const loco=useLocation()
    console.log(loco.state);
  return (
    <div>
      <h1>You are in about page and your id is {loco.state.data}</h1>
      {/* <Link to="/contact"> Contact</Link>
      <Link to="Home"> Home</Link> */}
    </div>
  )
}

export default About;

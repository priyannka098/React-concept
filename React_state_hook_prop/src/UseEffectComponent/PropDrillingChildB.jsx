import React from 'react'
import PropDrillingChildC from './PropDrillingChildC'

// function PropDrillingChildB({name}) -receives the prop
    function PropDrillingChildB() {
  return (
//     <PropDrillingChildC name={name}/>   - in prop drilling we do transfer data in props
 <PropDrillingChildC />        /* context api  implementation*/
)
}

export default PropDrillingChildB;
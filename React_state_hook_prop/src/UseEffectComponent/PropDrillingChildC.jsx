import React from 'react';
import {data,data1} from './PropDrillingParent';

function PropDrillingChildC({name}) {
return (
    <>
    <data.Consumer>
        {
            (name)=>{
                return(
                    <data1.Consumer>
                        {
                             (gender)=>{
                                return(

                                    <h1>Hello! I am {name} and I belong to {gender} category</h1>
                                )
                            }

                        }
                    </data1.Consumer>
                    
                )
            }
        }

    </data.Consumer>
    
    
    
    </>

  )
}

export default PropDrillingChildC;
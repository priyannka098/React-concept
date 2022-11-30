import React, { useReducer } from 'react';

function UseReducerComponent() {
  const initialstate=0;
  const reducer=(state, action)=>{    //dispatch call the reducer and in reducer  action increment will come
     switch(action){                  // and in switch case increment will come if increment matches to 
         case "Increment":             // any case then it will give that case and  that value  will save in countvariable
             return state+1;
         case "Decrement" :
             return state-1 ;
         default:
             return state;
     }
 
  }

  const[count,dispatch]=useReducer(reducer,initialstate);
 
  return (
    <>
    <div>
    <h1>Count : {count}</h1>
    <button  onClick={()=>dispatch("Increment")}> Increment</button>
    <button onClick={()=>dispatch("Decrement")} > Decrement</button>
    </div>

    </>
    
  )
}

export default UseReducerComponent;





import React from 'react';
import "./Counter.css";

class Counter extends React.Component {
  constructor(){
  super()
  this.state={
    count:0

  }
  }
  increment(){
  //   this.setState({
  //     count:this.state.count+1
  //   },() =>console.log( this.state.count) );
    
  // }
  this.setState((prevState)=>({
    count:prevState.count+1
  }))
  console.log(this.state.count)
}
  IncrementFive(){
    this.increment()
    this.increment() 
     this.increment()  
     this.increment()
     this.increment()
  }
  decrement(){

    this.setState(
      {
      count:this.state.count-1
    },
    () =>{console.log('Callbacl Value',this.state.count)} );
    console.log(this.state.value);


  }
  reset(){
    this.setState({
      count:0
    },() =>console.log( this.state.count) ); 
  }

  render() {
    return (
      <div className='counterbox'>
        <h1 className="">Counter - {this.state.count}</h1>
        <div  className="buttons">
        <button  className=" button-style"onClick={()=>this.incrementFive()}>Increment</button>
        <button className='button-style' onClick={()=>this.decrement()}>Decrement</button>
        <button className='button-style' onClick={()=>this.reset()}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;


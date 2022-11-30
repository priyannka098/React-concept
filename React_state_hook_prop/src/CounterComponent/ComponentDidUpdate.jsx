import React from 'react'

class ComponentDidUpdate extends  React.Component {
    constructor(){
        super();
        this.state={
            active:null,
            who:null

        }
    }
    componentDidUpdate(){
        console.warn("ComponentDidUpdate")
         if(this.state.who==null){ 
            console.warn("setting state")
            this.setState({who:"pranay"})
         }
        
    }
  render() {
    return (
      <div>
        <h1> componentDidUpdate{this.state.who}</h1>
        <button onClick={()=>this.setState({active:"yes"})}> Activate</button>
      </div>
    )
  }
}

export default ComponentDidUpdate;

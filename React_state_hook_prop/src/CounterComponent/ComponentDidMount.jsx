import React from 'react'
 class ComponentDidMount extends React.Component {
    constructor()
    {
        super();
        this.state={
            data:null
        }
        console.log("constructor");
        console.log("data "+ this.state.data);
    }
    componentDidMount(){
        console.log("componentDidMount")
        this.setState({data:"priya"})
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>Life cycle method {this.state.data}</h1>
        
      </div>
    )
  }
}

export default ComponentDidMount;

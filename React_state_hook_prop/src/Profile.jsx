import React from 'react';

class Profile extends React.Component{

    constructor(){
        super();
        this.state={
                name:'priyanka' , 
                age:27 ,
                count:0 
        };
        console.log(this.state);
    }

    updateCount(){
        this.setState(
            {
                count:this.state.count+1
            }
        );
        console.log(this.state);
    }
    updateAge(){
        this.setState({
            abcd:this.state.age+1
        });
        console.log(this.state);
    }
    render(){
        console.log("render");
    
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
            <h1>hello {this.state.name}</h1>
         <h1>Current Age{this.state.age}</h1><button onClick={()=>{this.updateAge()}}> Update Age</button>
            <button onClick={()=>{this.updateCount()}}>Update Count</button>
            </div>

        );
}
    
}
export default Profile;

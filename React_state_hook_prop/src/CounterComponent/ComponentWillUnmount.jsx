import React from 'react';


class ComponentWillUnmount extends React.Component {
    componentWillUnmount()
    {
        alert("User has been Deleted");
    }
  render() {
    return (
      <div>
        <h1>ComponentWillUnmount</h1>
        <ul>
            <li> Name:Priyanka</li>
            <li> Age:28</li>
            <li> Contact:12345576</li>
            <li> Email:priyanka@gmail.com</li>
        </ul>
      </div>
    )
  }
}


export default ComponentWillUnmount;

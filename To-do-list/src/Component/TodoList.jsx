import React from 'react';
import "./TodoList.css";

function TodoList() {


  return (
    <>
    <div className="outer-box">
    <div className=" container ">
    <span className="list">To Do List </span>
    <div>
    <input  className="input"type="text" placeholder='Create a new to do list'></input>
    <button className="button">Add</button>
    </div>
    </div>
    </div>

    </> 
  )
}

export default TodoList;
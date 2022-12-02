import React ,{useState}from 'react';
import "./TodoList.css";



function TodoList() {
  const[activity,setActivity]=useState("")
  const[listData,setListData]=useState([])



const addActivity=()=>{
  // setListData([...listData,activity]) //for asyncronous
  // console.log(listData);
  setListData((listData)=>{
    const updatedList=[...listData,activity]
    console.log(updatedList)
    setActivity('');
    return updatedList
     
  })
}
const removeList=(i)=>{
  const updatedListData=listData.filter((element,id)=>{
    return i!=id;
  })
  setListData(updatedListData)

}
const RemoveAll=()=>{
  setListData([])
}

 const handleOnChange=(e)=>{
  setActivity(e.target.value)

 }
  return (
    <>
    <div className="outer-box">
    <div className=" container ">
    <span className="list">To Do List </span>
    <div>
    <input  className="input"type="text" placeholder='Create a new to do list' value={activity} onChange={handleOnChange} ></input>
    <button className="button" onClick={addActivity}>Add</button>
    {listData!=[]&& listData.map((data,index)=>{
      return(
        <>
        <div className="rowdata">
        <p key={index}>
          <div className="listdata">{data}</div>
        </p>
        <div >
        <button  className=" Delete"onClick={()=>removeList(index)} >Delete</button>
        </div>
        </div>
        </>
      )
    }
    )}
    </div>

    <div>
    {listData.length>=1&&
        <button className="DeleteAll" onClick={RemoveAll}>Delete All</button>}
        </div>
    </div>
    </div>

    </> 
  )
}

export default TodoList;
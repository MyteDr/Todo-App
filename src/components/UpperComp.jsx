import React, { useEffect, useState } from 'react'
import {mainContext,useContext} from "../ContextApi"
import { toast } from 'react-toastify';

const UpperComp = () => {
  const [value,setValue]=useState("");
  const [todo,setTodo]=useState([]);
  const {addMethod}=useContext(mainContext);
  useEffect(()=>{
    addMethod({todo,setTodo});
  },[todo])
  return (
    <>
        <div className="header-text">Myte's Todo App</div>
        <input value={value} onChange={(e)=>{setValue(e.target.value)}} onKeyDown={(e)=>{
          if(e.key=="Enter")
          {
            if(value=="")
            {
              toast.warning("Please do not leave the field blank")
            }
            else{
              if(todo.filter(list => list.todo ==value.toLowerCase()).length==1)
              {
                toast.warning("Todo already exist")
              }
              else{
                setTodo([...todo,{todo:value,todo_c:false}]);
                setValue("")
              }
            }
          }
        }} placeholder='Add Todo...' className='input' type="text"/>
    </>
  )
}

export default UpperComp
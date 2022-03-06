import React, { useEffect ,useRef} from 'react'
import {TiTick} from "react-icons/ti"
import {FaTrashAlt} from "react-icons/fa"
import { mainContext,useContext } from '../ContextApi'

const LowerComp = () => {
    const {todo,setTodo}=useContext(mainContext);
    const ref = useRef(true)
    useEffect(()=>{
            if(ref.current)
            {
                setTimeout(() => {
                    var localTodo =JSON.parse(localStorage.getItem("todo"));
                    if(localTodo==null)
                    {
                        setTodo([]);
                    }
                    else{
                        setTodo(localTodo);
                    }
                    ref.current =false;
                }, 50);
            }
            else{
                localStorage.setItem("todo",JSON.stringify(todo));
            }
    },[todo])
  return (
    <div className='list'>
        {(todo??[]).map((item,idx)=>(
            <div key={idx} className="todo">
                <p className={item.todo_c? 'todo_c': 'todo-text'}>{item.todo}</p>
                <div className="todo-right">
                    <TiTick onClick={()=>{
                        item.todo_c = !item.todo_c;
                        setTodo([...todo]);
                        todo[idx].todo_c =item.todo_c;
                    }} className='todo-tic'/>
                    <FaTrashAlt onClick={(e)=>{
                        setTodo(todo.filter(todoItem=> item.todo != todoItem.todo));
                    }} className='todo-trash'/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default LowerComp
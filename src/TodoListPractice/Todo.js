import React, { useState } from 'react'
import Combine from './Combine'

const Todo = () => {
    
  const[task,setTask]=useState('')
  const[lists,setLists]=useState([])
  const submitHandler=e=>{
    e.preventDefault()
    if(!task) return;
     const newTodos=[...lists,task]
     setLists(newTodos)
     setTask('')
  }


  const removeTodo=index=>{
     const newTodos=[...lists]
      newTodos.splice(index,1)
      setLists(newTodos)
  }
  return (
    <div>
        <h2>TodoList Management</h2>
        <form onSubmit={submitHandler}>
        <input type='text' value={task} onChange={e=>setTask(e.target.value)}/>
        <button >Add</button>
        </form><br/>
        <Combine todo={lists} removeTodo={removeTodo}/>

    </div>
  )
}

export default Todo
import React, { useState } from 'react'
import List from './List';

const Main = () => {
    const [list,setList]=useState('');
    const[todos,setTodos]=useState([])

    const changeHandler=e=>{
        setList(e.target.value)
    }

    const submitHandler=(e)=>{
       e.preventDefault()
       if(!list) return;
       const newTodos=[...todos,list]
        setTodos(newTodos)
        setList('')

    }

    // const deleteHandler=(indexvalue)=>{
    //     const newTodos=todos.filter((ele,index)=> index !==indexvalue)
    //     setTodos(newTodos)
    // }


    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

  return (
    <div className='card'>
        <div className='card-body'>
            <h3 className='card-tittle text-danger'>Todo List</h3>
            <form onSubmit={submitHandler}>
                <input type="text" value={list} onChange={changeHandler} /> &nbsp;
                <button className='btn btn-primary btn-sm'>Add</button>
            </form><br/><br/>
            <List task={todos} removeTodo={removeTodo}/>
        </div>
    </div>
  )
}

export default Main
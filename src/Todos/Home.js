import React, { useState } from 'react'
import Attach from './Attach';

const Home = () => {
    const[order,setOrder]=useState('');
    const[todo,setTodo]=useState([]);


     const handleSubmit=(e)=>{
        e.preventDefault()
        if(!order) return;
       const newTodo=[...todo,order]
         setTodo(newTodo)
         setOrder('')
     }   
     
     const remove=index=>{
        const newTodo=[...todo]
        newTodo.splice(index,1)
        setTodo(newTodo)
     }
  return (
    <div>
        <h3>TodoList</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' value={order} onChange={e=>setOrder(e.target.value)}/>
          <button>New</button>
        </form><br/>
        <Attach todo={todo} remove={remove}/>
    </div>
  )
}

export default Home
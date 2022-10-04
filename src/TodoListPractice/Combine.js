import React from 'react'

const Combine = ({todo,removeTodo}) => {
  return (
    <div>
        {
          todo.map(
            (ele,index)=><div key={index} className='d-flex justify-content-center'>
                 
                 <h2>{ele}</h2> &nbsp;
                 <button onClick={()=>removeTodo(index)}>delete</button>
                </div>
          )  
        }
    </div>
  )
}

export default Combine
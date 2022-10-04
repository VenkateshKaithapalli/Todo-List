import React from 'react'

const Attach = ({todo,remove}) => {
  return (
    <div>
   {
    todo.map(
        (ele,index)=>
        <div key={index} className="d-flex justify-content-center">
            <h2>{ele}</h2>
            <button onClick={()=>remove(index)}>Delete</button>
        </div>
    )
   }
    </div>
  )
}

export default Attach
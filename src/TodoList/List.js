import React from 'react'

const List = ({task,removeTodo}) => {
  return (
    <div>
        {
             task.map(
                (ele,index)=><div key={index} className='d-flex justify-content-center m-4'>
                        <h2>{ele}</h2> &emsp;
                        <button className='btn border-width-none ' onClick={()=>removeTodo(index)}>Delete<i className="fa-regular fa-trash-can text-danger"></i></button>

                       
                </div>
                
             )
        }
    </div>
  )
}

export default List
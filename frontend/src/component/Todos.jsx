import React, { useState } from 'react'

const Todos = ({todos}) => {

 
  return (
    <div>

        <div>
            {
                todos.map( (todo,index)=>(
                    <div key={index}>
                   <p>{todo.title}</p>
                   <p>{todo.desc}</p>
                   <button>mark as done</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Todos
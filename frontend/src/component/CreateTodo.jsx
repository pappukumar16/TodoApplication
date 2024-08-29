import React, { useState } from 'react'

const CreateTodo = () => {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    
    
    const submithandler = async(e)=>{
        e.preventDefault();
            await fetch("/api/v1/todo",{
            method:"POST",
            body: JSON.stringify({
                title:title,
                desc:desc,
            }),
            headers:{
                "Content-Type":"Application/json"
            }
        })
       
    }

  return (
    <div>
        <form onSubmit={submithandler}>
        <input type='text'
        
        onChange={ (event)=>{
            const value = event.target.value;
              setTitle(value)
        }}  placeholder='title'/>
        <br></br>
        <br></br>
        <input type='text' onChange={ (event)=>{
               const value = event.target.value;
            setDesc(value)
        }} placeholder='desc'/>
        <br></br>
        <br></br>
        <button >Add todo</button>
        </form>
       
    </div>
  );
}

export default CreateTodo
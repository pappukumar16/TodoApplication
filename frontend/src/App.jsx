import React, { useEffect, useState } from 'react'
import "./App.css"
import CreateTodo from "./component/CreateTodo.jsx"
import Todos from "./component/Todos.jsx"

const App = () => {

  const [todos,setTodos] = useState([]);
 

  async function fetchDataBacked() {
    // setLoading(true)
    try {
      const res =await fetch("/api/v1/todos");
      const ans = await res.json();
      setTodos(ans.tosos)
      console.log(ans)
    } catch (error) {
      console.log(error)
      setTodos([])
    }
    // setLoading(false)
  }

  useEffect( ()=>{
    fetchDataBacked();
  },[])

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
// import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'
import { useState } from 'react';

function App() {
  const [todos,setTodos] =  useState([])

  fetch ("http://localhost:3000/todos")
  .then(async function(res){
    const json=await res.json();
    setTodos(json.todos);

  })

  // const todosArray = [
  //   {
  //     title: "asad",
  //     description: "dsd",
  //     completed: false
  //   },
  //   {
  //     title: "asasdvd",
  //     description: "dsvsdd",
  //     completed: false
  //   }
  // ];
  // console.log(todosArray);
  return (
   <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos} ></Todos>
   </div>
  )
}

export default App

// import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'

function App() {
  const todosArray = [
    {
      title: "asad",
      description: "dsd",
      completed: false
    },
    {
      title: "asasdvd",
      description: "dsvsdd",
      completed: false
    }
  ];

  return (
   <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todosArray}></Todos>
   </div>
  )
}

export default App

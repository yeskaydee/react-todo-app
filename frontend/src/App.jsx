import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'

function App() {

  return (
   <div>
    <CreateTodo></CreateTodo>
    <Todos todos={[
      {
        title:"asad",
        description:"dsd",
        completed:false
      },
      {title:"asad",
      description:"dsd",
      completed:false
      }
    ]}></Todos>
   </div>
  )
}

export default App

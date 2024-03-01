import { useState } from 'react'
import TODOname from './Components/TODOname'
import ListTodo from './Components/ListTodo'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TODOname/>
     <ListTodo/>
     
    </>
  )
}

export default App

import { motion } from "framer-motion"

import './App.css'

import { TodoListElement } from "./components/todo"
import { Login } from "./components/login"
import { Register } from "./components/register"
import { SetStateAction, useState } from "react"
import { TodoList } from "./components/todo-list"


function App() {

  const [isSigned, setIsSigned] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)



  return (
    <>
      {/* <Login animate={"hidden"} setAuthenticated={setIsAuthenticated} />
      <Register animate={"hidden"} setIsSigned={setIsSigned} /> */}
      <TodoList/>
    </>
  )
}

export default App

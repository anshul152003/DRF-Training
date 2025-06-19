import { createContext, useState } from "react"
import MyContext from "./context/MyContext.jsx"

function App() {

  const [age,setAge] = useState(27);
  const uName = "Anshul";

  function printTable() {
    for(let i=1; i<10; i++){
      console.log(`2 * ${i} =`, 2 * i);
    }
  }

  const user = {
    age,
    uName,
    setAge,
    printTable
  }

  return (
    <MyContext user={user}/>
  )
}

export default App

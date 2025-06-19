import { useContext, useState } from 'react'
import {myContext} from './main';
import './App.css'

function App() {
  const {uName,printTable} = useContext(myContext);
  printTable();
  console.log(uName);
  return (
    <div>
      <p>{uName}</p>
    </div>
  )
}

export default App

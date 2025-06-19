import React, { useContext } from 'react'
import MyContext from '../context/MyContext';
function Child1() {
    const {age,uName} = useContext(MyContext);
  return (
    <div>
      <h1>Child1</h1>
      <p>Name: {uName}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Child1

// Types of Components in React:
// 1. Stateless Components (Functional Components without state):
// 2. Stateful Components (Using useState or Class Components):

// Stateful Component Example using useState
import React, { useState } from 'react';
function App() {

  const [stateName, setStateName] = useState("Anshul");

  // function change(){
  //   let newName = "Anshul Gangrade";
  //   setStateName(newName);
  // }

  return (
    <div>
      <p>Anshul Here</p>
      <p>My Full name is {stateName}</p>
      <button onClick={() => {setStateName("Anshul Gangrade")}}>Change Name</button>
    </div>
  )
}

export default App;

// Example of a Stateless Functional Component
/*function App() {
  let name = "Anshul Gangrade";

  function change(e) {
    let name = "Anshul Kumar";
    console.log(name);
  }
  
  console.log(name);

  return (
    <div>
      <p>Anshul Here</p>
      <p>My name is {name}.</p>
      /* <button onClick={() => {change()}}> Anonymous Name </button>  This will pass an anonymous function that calls changeName */
      /* <button onClick={change()}> parenthese Name </button> This will call the function immediately */
      /* <button onClick={change}> Change Name </button>       This will pass the function reference*/

/*    </div>
  );
}

export default App;
*/

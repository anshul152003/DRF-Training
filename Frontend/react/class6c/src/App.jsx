import { useState } from 'react';
import Child1 from "./components/Child1.jsx"

function App() {

  const [name, setName] = useState();
  function getData(Data){
    setName(Data);
  }
  return (
    <div className="App">
      <h2>Set Name: {name}</h2>
      <Child1 getData={getData}/>
    </div>
  );
}

export default App;

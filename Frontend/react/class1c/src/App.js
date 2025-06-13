function App() {
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
      {/* <button onClick={() => {change()}}>Anonymous Name</button>  This will pass an anonymous function that calls changeName */}
      {/* <button onClick={change()}>parenthese Name</button> This will call the function immediately */}
      <button onClick={change}>Change Name</button>       This will pass the function reference

    </div>
  );
}

export default App;

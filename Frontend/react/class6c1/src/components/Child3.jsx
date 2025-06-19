const Child3 = ({getData}) => {
    let name = "Anshul";
    getData(name);
  return (
    <div>
      {/* <h1>Child 3 Hu</h1> */}
      <p>Child3</p>
    </div>
  )
}

export default Child3

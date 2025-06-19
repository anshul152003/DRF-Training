import Child2 from "./Child2.jsx"

const Child1 = ({getData}) => {
  return (
    <div>
      {/* <h1>Child1 Hu</h1> */}
      <Child2 getData={getData}/>
    </div>
  )
}

export default Child1

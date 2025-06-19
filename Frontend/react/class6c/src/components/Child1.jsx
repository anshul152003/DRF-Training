import Child2 from "./Child2.jsx"

const Child1 = ({getData}) => {
  return (
    <div>
      <Child2 getData={getData}/>
    </div>
  )
}

export default Child1

import Child3 from './Child3.jsx'

function Child2({getData}) {
  return (
    <div>
      {/* <h2>Child 2 Hu</h2> */}
      <Child3 getData={getData}/>
    </div>
  )
}

export default Child2

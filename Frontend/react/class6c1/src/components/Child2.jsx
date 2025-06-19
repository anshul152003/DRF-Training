import Child3 from './Child3.jsx'

function Child2({getData}) {
  return (
    <div>
      <Child3 getData={getData}/>
    </div>
  )
}

export default Child2

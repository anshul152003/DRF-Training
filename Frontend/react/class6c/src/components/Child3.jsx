const Child3 = ({getData}) => {
    const name = "Anshul";
    getData({name});
  return (
    <div>
        <p>{name}</p>
    </div>
  )
}

export default Child3

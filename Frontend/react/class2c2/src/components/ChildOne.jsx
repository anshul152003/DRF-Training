import ChildTwo from "./ChildTwo";

function ChildOne({printMoney}) {
  return (
    <div>
      <ChildTwo secondMoney={printMoney}/>
    </div>
  );
}

export default ChildOne;
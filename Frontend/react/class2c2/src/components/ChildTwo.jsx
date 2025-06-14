import ChildThree from "./ChildThree";

function ChildTwo({secondMoney}) {
  return (
    <div>
      {/* <h2>Child Two</h2> */}
      <ChildThree threeMoney={secondMoney}/>
    </div>
  );
}

export default ChildTwo;
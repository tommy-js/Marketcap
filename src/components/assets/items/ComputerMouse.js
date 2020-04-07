import React, { useState } from "react";

function ComputerMouse(props) {
  const [sellVal, setSellVal] = useState(0);

  function startComputerMouse() {
    props.setComputerMouse(true);
    console.log("getting");
  }

  function endComputerMouse() {
    props.setComputerMouse(false);
  }

  function setSellAmount(e) {
    let value = e.target.value;
    setSellVal(value);
  }

  function sellAmount() {
    props.sellComputerMouse(sellVal);
  }

  return (
    <div>
      <div>Build Computer Mice</div>
      <div>Current Price: {props.mousePrice}</div>
      <div>You own {props.mice} mice</div>
      <button onClick={startComputerMouse}>Build</button>
      <button onClick={endComputerMouse}>Stop Building</button>
      <input
        type="number"
        placeholder="amount to sell"
        min="0"
        onChange={setSellAmount}
      />
      <button onClick={sellAmount}>Sell</button>
    </div>
  );
}

export default ComputerMouse;

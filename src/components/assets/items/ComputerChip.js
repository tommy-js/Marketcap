import React, { useState } from "react";

function ComputerChip(props) {
  const [sellVal, setSellVal] = useState(0);
  let price = 2;

  function startCPUChip() {
    props.setCPUChips(true);
    console.log("getting");
  }

  function endCPUChip() {
    props.setCPUChips(false);
  }

  function setSellAmount(e) {
    let value = e.target.value;
    setSellVal(value);
  }

  function sellAmount() {
    props.sellCPUChip(sellVal);
  }

  return (
    <div>
      <div>Build Computer Chips</div>
      <div>Current Price: {price}</div>
      <div>You own {props.chips} chips</div>
      <button onClick={startCPUChip}>Build</button>
      <button onClick={endCPUChip}>Stop Building</button>
      <input
        type="number"
        placeholder="amount to sell"
        onChange={setSellAmount}
      />
      <button onClick={sellAmount}>Sell</button>
    </div>
  );
}

export default ComputerChip;

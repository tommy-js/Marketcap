import React, { useState } from "react";

function ComputerChip(props) {
  const [sellVal, setSellVal] = useState(0);

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

  function autoSell() {
    setInterval(props.autoSell, 1000);
  }

  return (
    <div>
      <div>Build Computer Chips</div>
      <div>Current Price: ${Math.floor(props.chipPrice * 100) / 100}</div>
      <div>You own {props.chips} chips</div>
      <div>Material cost:</div>
      <div>Glass: 1(-{props.totalGlass})</div>
      <div>Plastic: 3(-{props.totalPlastic})</div>
      <div>Aluminum: 6(-{props.totalAluminum})</div>
      <button onClick={startCPUChip}>Build</button>
      <button onClick={endCPUChip}>Stop Building</button>
      <input
        type="number"
        placeholder="amount to sell"
        min="0"
        onChange={setSellAmount}
      />
      <button onClick={sellAmount}>Sell</button>
      <button onClick={autoSell}>Sell Automatically</button>
      <button onClick={props.sellAll}>Sell All</button>
    </div>
  );
}

export default ComputerChip;

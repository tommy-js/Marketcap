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

  function autoSell() {
    setInterval(props.autoSell, 1000);
  }

  return (
    <div>
      <div>Build Computer Mice</div>
      <div>Current Price: ${Math.floor(props.mousePrice * 100) / 100}</div>
      <div>You own {props.mice} mice</div>
      <div>Material cost:</div>
      <div>Glass: 1(-{props.totalGlass})</div>
      <div>Plastic: 5(-{props.totalPlastic})</div>
      <div>Aluminum: 2(-{props.totalAluminum})</div>
      <button onClick={startComputerMouse}>Build</button>
      <button onClick={endComputerMouse}>Stop Building</button>
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

export default ComputerMouse;

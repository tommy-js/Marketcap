import React, { useState } from "react";

function MobilePhone(props) {
  const [sellVal, setSellVal] = useState(0);

  function startMobilePhone() {
    props.setMobilePhone(true);
    console.log("getting");
  }

  function endMobilePhone() {
    props.setMobilePhone(false);
  }

  function setSellAmount(e) {
    let value = e.target.value;
    setSellVal(value);
  }

  function sellAmount() {
    props.sellMobilePhone(sellVal);
  }

  function autoSell() {
    setInterval(props.autoSell, 1000);
  }

  return (
    <div>
      <div>Build Smartphone</div>
      <div>Current Price: {props.phonePrice}</div>
      <div>You own {props.phones} phones</div>
      <button onClick={startMobilePhone}>Build</button>
      <button onClick={endMobilePhone}>Stop Building</button>
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

export default MobilePhone;

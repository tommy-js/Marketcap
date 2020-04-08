import React, { useState } from "react";
import "../../../main.scss";

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
      <div>Build Smartphone ({props.phones})</div>
      <div>Current Price: ${Math.floor(props.phonePrice * 100) / 100}</div>
      <div>Material cost:</div>
      <div>
        Glass: 5({props.totalGlass}), Plastic: 2({props.totalPlastic}),
        Aluminum: 3({props.totalAluminum})
      </div>
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

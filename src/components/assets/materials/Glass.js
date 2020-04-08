import React, { useState } from "react";

function Glass(props) {
  const [glass, setGlass] = useState(0);

  function setGlassVal(e) {
    setGlass(e.target.value);
  }

  function buyGlass() {
    props.addGlass(glass);
    setGlass(0);
  }

  function buyLargeGlass() {
    props.addGlass(100);
  }

  return (
    <div>
      <p>Buy glass for $4</p>
      <input
        value={glass}
        type="number"
        min="0"
        onChange={e => setGlassVal(e)}
      />
      <button onClick={buyGlass}>Purchase</button>
      <button onClick={buyLargeGlass}>Purchase 100</button>
      <button>Auto purchase listed amount</button>
    </div>
  );
}

export default Glass;

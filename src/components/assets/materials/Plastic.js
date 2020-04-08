import React, { useState } from "react";

function Plastic(props) {
  const [plastic, setPlastic] = useState(0);

  function setPlasticVal(e) {
    setPlastic(e.target.value);
  }

  function buyPlastic() {
    props.addPlastic(plastic);
    setPlastic(0);
  }

  function buyLargePlastic() {
    props.addPlastic(100);
  }

  return (
    <div>
      <p>Buy plastic for $2.50</p>
      <input
        value={plastic}
        type="number"
        min="0"
        onChange={e => setPlasticVal(e)}
      />
      <button onClick={buyPlastic}>Purchase</button>
      <button onClick={buyLargePlastic}>Purchase 100</button>
      <button>Auto purchase listed amount</button>
    </div>
  );
}

export default Plastic;

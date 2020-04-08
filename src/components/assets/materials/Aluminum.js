import React, { useState } from "react";
import "../../../main.scss";

function Aluminum(props) {
  const [aluminum, setAluminum] = useState(0);

  function setAluminumVal(e) {
    setAluminum(e.target.value);
  }

  function buyAluminum() {
    props.addAluminum(aluminum);
    setAluminum(0);
  }

  function buyLargeAlum() {
    props.addAluminum(100);
  }

  return (
    <div>
      <p>Buy aluminum for $7</p>
      <input
        value={aluminum}
        type="number"
        min="0"
        onChange={e => setAluminumVal(e)}
      />
      <button onClick={buyAluminum}>Purchase</button>
      <button onClick={buyLargeAlum}>Purchase 100</button>
      <button>Auto purchase listed amount</button>
    </div>
  );
}

export default Aluminum;

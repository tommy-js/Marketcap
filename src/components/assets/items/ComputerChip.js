import React from "react";

function ComputerChip(props) {
  let price = 2;

  function startCPUChip() {
    props.setCPUChips(true);
    console.log("getting");
  }

  function endCPUChip() {
    props.setCPUChips(false);
  }

  return (
    <div>
      <div>Build Computer Chips</div>
      <div>Current Price: {price}</div>
      <div>You own {props.chips} chips</div>
      <button onClick={startCPUChip}>Build</button>
      <button onClick={endCPUChip}>Stop Building</button>
    </div>
  );
}

export default ComputerChip;

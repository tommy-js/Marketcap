import React from "react";

function Bankrupt(props) {
  if (props.money > 0) {
    return null;
  } else {
    return (
      <div>
        <p>You are bankrupt!</p>
        <div>Get emergency cash influx and reduce your credit score to 500</div>
        <button onClick={props.emergencyCash}>Get</button>
      </div>
    );
  }
}

export default Bankrupt;

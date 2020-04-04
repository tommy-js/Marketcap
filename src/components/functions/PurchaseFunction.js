import React from "react";
import "../../main.css";

function PurchaseFunction(props) {
  const cost = props.cost;
  return (
    <div className="purchase_button">
      <button onClick={cost => props.purchaseMe(props.cost)}>Buy me</button>
      <p>cost is {cost}</p>
    </div>
  );
}

export default PurchaseFunction;

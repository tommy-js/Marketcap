import React from "react";
import PurchaseFunction from "../../functions/PurchaseFunction";
import "../../../main.css";

function Assets(props) {
  const cost = 200;
  return (
    <div className="assets_container">
      {props.assets}
      <PurchaseFunction cost={cost} purchaseMe={props.purchaseMe} />
    </div>
  );
}

export default Assets;

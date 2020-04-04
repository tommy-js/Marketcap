import React from "react";
import PurchaseFunction from "../../functions/PurchaseFunction";
import EmployeeList from "./EmployeeList";
import "../../../main.css";

function Assets(props) {
  const cost = 200;
  return (
    <div>
      <EmployeeList assets={props.assets} />
      <PurchaseFunction cost={cost} purchaseMe={props.purchaseMe} />
    </div>
  );
}

export default Assets;

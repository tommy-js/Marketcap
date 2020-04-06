import React from "react";
import PurchaseFunction from "../../functions/PurchaseFunction";
import EmployeeList from "./EmployeeList";
import LoanFunction from "../../functions/LoanFunction";
import "../../../main.css";

function Assets(props) {
  const cost = 200;
  return (
    <div>
      <EmployeeList assets={props.assets} />
      <PurchaseFunction cost={cost} purchaseMe={props.purchaseMe} />
      <LoanFunction
        loanTakeout={props.loanTakeout}
        submitPaybackAmount={props.submitPaybackAmount}
      />
      <p>Your loans are: {props.loans}</p>
    </div>
  );
}

export default Assets;

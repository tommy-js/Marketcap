import React, { useState } from "react";
import PurchaseFunction from "../../functions/PurchaseFunction";
import EmployeeList from "./EmployeeList";
import LoanFunction from "../../functions/LoanFunction";
import "../../../main.css";

function Assets(props) {
  const cost = 200;
  const [identifier, setIdentifier] = useState("");
  const [loans, setLoans] = useState(props.loans);
  if (loans > 1000000) {
    if (loans > 1000000000) {
      setLoans(loans / 1000000000);
      setIdentifier("M");
    } else {
      setLoans(loans / 1000000);
      setIdentifier("B");
    }
  }
  return (
    <div>
      <EmployeeList assets={props.assets} />
      <PurchaseFunction cost={cost} purchaseMe={props.purchaseMe} />
      <LoanFunction
        loanTakeout={props.loanTakeout}
        submitPaybackAmount={props.submitPaybackAmount}
        credit={props.credit}
        totalLoans={props.loans}
        termComplete={props.termComplete}
      />
      <p>
        Your loans are: ${props.loans.toLocaleString()}
        {identifier}
      </p>
    </div>
  );
}

export default Assets;

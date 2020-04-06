import React, { prevState, useState } from "react";
import PurchaseFunction from "../../functions/PurchaseFunction";
import EmployeeList from "./EmployeeList";
import LoanFunction from "../../functions/LoanFunction";
import "../../../main.css";

function Assets(props) {
  const [identifier, setIdentifier] = useState("");
  const [loans, setLoans] = useState(props.loans);
  const [currentLoans, setCurrentLoans] = useState([]);
  let mapper = [];
  if (loans > 1000000) {
    if (loans > 1000000000) {
      setLoans(loans / 1000000000);
      setIdentifier("M");
    } else {
      setLoans(loans / 1000000);
      setIdentifier("B");
    }
  }

  function takeoutLoan() {
    const keylog = {
      id: currentLoans.length
    };

    setCurrentLoans([
      ...currentLoans,
      {
        id: currentLoans.length
      }
    ]);
  }

  return (
    <div>
      <EmployeeList assets={props.assets} fireEmployee={props.fireEmployee} />

      {currentLoans.map(el => (
        <LoanFunction
          key={el.id}
          loanTakeout={props.loanTakeout}
          submitPaybackAmount={props.submitPaybackAmount}
          credit={props.credit}
          totalLoans={props.loans}
          termComplete={props.termComplete}
          updateCredit={props.updateCredit}
        />
      ))}
      <p>
        <button onClick={() => takeoutLoan()}>Take out new loan</button>
        Your loans are: ${props.loans.toLocaleString()}
        {identifier}
      </p>
    </div>
  );
}

export default Assets;

import React, { prevState, useState } from "react";
import PurchaseFunction from "../../functions/PurchaseFunction";
import EmployeeList from "./EmployeeList";
import LoanFunction from "../../functions/LoanFunction";
import Credit from "./Credit";
import "../../../main.scss";

function Assets(props) {
  const [identifier, setIdentifier] = useState("");
  const [loans, setLoans] = useState(props.loans);
  const [currentLoans, setCurrentLoans] = useState([]);
  const [loanCount, setLoanCount] = useState(0);
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

  function dropLoan() {
    setLoanCount(prev => prev - 1);
  }

  function takeoutLoan() {
    if (loanCount < 3) {
      const keylog = {
        id: currentLoans.length
      };

      setCurrentLoans([
        ...currentLoans,
        {
          id: currentLoans.length
        }
      ]);
      setLoanCount(prev => prev + 1);
    }
  }

  return (
    <div>
      <div className="loans">
        <Credit credit={props.credit} />
        {currentLoans.map(el => (
          <LoanFunction
            key={el.id}
            loanTakeout={props.loanTakeout}
            submitPaybackAmount={props.submitPaybackAmount}
            credit={props.credit}
            totalLoans={props.loans}
            termComplete={props.termComplete}
            updateCredit={props.updateCredit}
            deferLoanPayment={props.deferLoanPayment}
            dropLoan={dropLoan}
          />
        ))}
        <p>
          <button onClick={() => takeoutLoan()}>Take out new loan</button>
          Your loans are: ${props.loans.toLocaleString()}
          {identifier}
        </p>
      </div>
      <div className="employee_list">
        <EmployeeList assets={props.assets} fireEmployee={props.fireEmployee} />
      </div>
    </div>
  );
}

export default Assets;

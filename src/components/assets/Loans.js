import React, { prevState, useState } from "react";
import LoanFunction from "../functions/LoanFunction";

function Loans(props) {
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
    if (loanCount < 1) {
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
      {currentLoans.map(el => (
        <LoanFunction
          key={el.id}
          lTakeout={props.lTakeout}
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
        <button onClick={takeoutLoan}>Take out new loan</button>
        Current Loans: ${props.loans.toLocaleString()}
        {identifier}
      </p>
    </div>
  );
}

export default Loans;

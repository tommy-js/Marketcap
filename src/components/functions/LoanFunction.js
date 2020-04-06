import React, { useState } from "react";

function LoanFunction(props) {
  const [loanCounter, setLoanCounter] = useState(0);
  const [disabledController, setDisabledController] = useState(false);
  const [loanMonthly, setLoanMonthly] = useState(0);
  const [loanCheck, setLoanCheck] = useState(0);
  const [identifier, setIdentifier] = useState("");
  const [checkChanger, setCheckChanger] = useState(true);

  function updateInput(e) {
    setLoanCounter(e.target.value);
  }
  function submitInput() {
    setLoanMonthly(0.05 * loanCounter);
    props.loanTakeout(loanCounter);
    setDisabledController(true);
  }

  function changePaybackAmount(e) {
    setLoanCheck(e.target.value);
  }

  function submitPaybackAmount() {
    let loancheck = Number(loanCheck);
    let loancounter = Number(loanCounter);
    if (loancheck >= loancounter) {
      setLoanMonthly(loancounter);
      props.submitPaybackAmount(loancounter);
    } else {
      setLoanMonthly(loancheck);
      props.submitPaybackAmount(loancheck);
    }
    setCheckChanger(true);
  }

  if (checkChanger === true) {
    if (loanMonthly > 1000000) {
      if (loanMonthly > 1000000000) {
        setLoanMonthly(loanMonthly / 1000000000);
        setIdentifier("B");
      } else {
        setLoanMonthly(loanMonthly / 1000000);
        setIdentifier("M");
      }
    } else if (loanMonthly < 10000000) {
      setIdentifier("");
    }
    setCheckChanger(false);
  }

  return (
    <div>
      <p>Take out loan</p>
      <input
        type="text"
        disabled={disabledController}
        onChange={e => updateInput(e)}
      />
      <button disabled={disabledController} onClick={submitInput}>
        Submit
      </button>
      <p>
        Your loan rate is 5%. Your monthly payment is $
        {loanMonthly.toLocaleString()}
        {identifier}
      </p>
      <input
        type="text"
        onChange={e => changePaybackAmount(e)}
        disabled={!disabledController}
      />
      <button
        type="text"
        disabled={!disabledController}
        onClick={submitPaybackAmount}
      >
        Set loan payback amount
      </button>
    </div>
  );
}

export default LoanFunction;

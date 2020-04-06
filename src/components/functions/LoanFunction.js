import React, { useState } from "react";

function LoanFunction(props) {
  const [loanCounter, setLoanCounter] = useState(0);
  const [disabledController, setDisabledController] = useState(false);
  const [loanMonthly, setLoanMonthly] = useState(0);
  const [loanCheck, setLoanCheck] = useState(0);

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
    if (loanCheck >= loanCounter) {
      setLoanMonthly(loanCounter);
      props.submitPaybackAmount(loanCounter);
    } else {
      setLoanMonthly(loanCheck);
      props.submitPaybackAmount(loanCheck);
    }
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
      <p>Your loan rate is 5%. Your monthly payment is {loanMonthly}</p>
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

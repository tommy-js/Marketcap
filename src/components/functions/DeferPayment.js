import React, { useState, useEffect } from "react";

function DeferPayment(props) {
  const [showDefer, setDefer] = useState(props.showDefer);
  useEffect(() => {
    {
      props.credit >= 1000 ? setDefer(false) : setDefer(true);
    }
  });
  return (
    <div>
      <div>
        Defer your payment for 3 months so long as your credit is above 10,000.
        Your credit is currently {props.credit}. Note that this will reduce your
        credit by 1,000 points.
      </div>
      <button
        style={{ display: props.showDeferButton }}
        disabled={showDefer}
        onClick={props.deferPayment}
      >
        Defer
      </button>
    </div>
  );
}

export default DeferPayment;

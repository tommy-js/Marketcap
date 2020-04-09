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

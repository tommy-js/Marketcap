import React, { useState } from "react";

function IncomeNotification(props) {
  const [display, setDisplay] = useState("block");
  setTimeout(() => {
    setDisplay("none");
    props.changeMillionaireStat(true);
  }, 3000);
  return (
    <div style={{ display: display }}>
      <p>{props.message}</p>
    </div>
  );
}

export default IncomeNotification;

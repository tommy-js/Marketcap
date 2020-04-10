import React, { useState, useEffect } from "react";
import "../../../main.scss";

function Statistics(props) {
  function toggleState() {
    props.toggleState();
  }

  if (props.renderState) {
    return (
      <div className="stats_page">
        <p>Lifetime earnings: {props.totalEarnings}</p>
        <p>Days passed: {Math.floor(props.days)}</p>
        <button onClick={toggleState}>Close</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Not Rendered!</p>
      </div>
    );
  }
}

export default Statistics;

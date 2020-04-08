import React, { useState } from "react";
import "../../main.css";

function Calendar(props) {
  const [displayed, setDisplayed] = useState(false);
  const [displayCall, setDisplayCall] = useState("hidden_days");
  const [pin, setPin] = useState("pin");
  let timePassed = Math.floor(props.days);
  let days = timePassed;
  let weeks = Math.floor(timePassed / 7);
  let months = Math.floor(timePassed / 30);
  let years = Math.floor(timePassed / 365);

  function pinToCal() {
    if (!displayed) {
      setDisplayCall("show_days");
      setPin("unpin");
      setDisplayed(true);
    } else {
      setDisplayCall("hidden_days");
      setPin("pin");
      setDisplayed(false);
    }
  }

  if (days >= 365) {
    return (
      <div className="calendar">
        <div>You've been in business for over {years} year(s).</div>
        <div className={displayCall}>
          This is a total of {days} days{" "}
          <button onClick={pinToCal}>{pin}</button>
        </div>
      </div>
    );
  } else if (days >= 30 && days < 365) {
    return (
      <div className="calendar">
        <div>You've been in business for over {months} month(s).</div>
        <div className={displayCall}>
          This is a total of {days} days{" "}
          <button onClick={pinToCal}>{pin}</button>
        </div>
      </div>
    );
  } else if (days > 7 && days < 30) {
    return (
      <div className="calendar">
        <div>You've been in business for over {weeks} week(s).</div>
        <div className={displayCall}>
          This is a total of {days} days{" "}
          <button onClick={pinToCal}>{pin}</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="calendar">
        <div>You have been in business for {days} days</div>
      </div>
    );
  }
}

export default Calendar;

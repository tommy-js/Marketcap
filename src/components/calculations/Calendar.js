import React from "react";
import "../../main.css";

function Calendar(props) {
  let timePassed = Math.floor(props.days);
  let days = timePassed;
  let weeks = Math.floor(timePassed / 7);
  let months = Math.floor((timePassed / 30) * 10) / 10;
  let years = Math.floor((timePassed / 365) * 10) / 10;
  return (
    <div className="calendar">
      <div>You have been in business for {days} days</div>
      <div>This is {weeks} weeks</div>
      <div>Which is {months} months</div>
      <div>Which is {years} years</div>
    </div>
  );
}

export default Calendar;

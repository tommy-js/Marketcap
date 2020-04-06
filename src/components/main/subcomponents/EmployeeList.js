import React from "react";
import Employee from "../../assets/Employee.js";

function CompanyList(props) {
  return (
    <div>
      {props.assets.map(el => (
        <Employee salary={el.salary} />
      ))}
    </div>
  );
}

export default CompanyList;

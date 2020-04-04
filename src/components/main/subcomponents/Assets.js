import React from "react";
import PurchaseFunction from "../../functions/PurchaseFunction";
import CompanyList from "./CompanyList";
import "../../../main.css";

function Assets(props) {
  const cost = 200;
  const secondnewvar = props.assets;
  console.log(secondnewvar);
  return (
    <div className="assets_container">
      {secondnewvar.map(elements => (
        <CompanyList />
      ))}
      <PurchaseFunction cost={cost} purchaseMe={props.purchaseMe} />
    </div>
  );
}

export default Assets;

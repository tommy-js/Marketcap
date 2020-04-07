import React from "react";
import OwnedBuilding from "./OwnedBuilding";

function OwnedEstate(props) {
  let ownedBuildings = props.ownedBuildings;
  return (
    <div>
      {ownedBuildings.map(el => (
        <OwnedBuilding name={el.name} />
      ))}
    </div>
  );
}

export default OwnedEstate;

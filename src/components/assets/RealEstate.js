import React from "react";
import GetRealEstate from "./GetRealEstate";
import buildings from "../main/subcomponents/realEstate";

function RealEstate(props) {
  return (
    <div>
      <GetRealEstate
        name={props.name}
        space={props.space}
        capacity={props.capacity}
        price={props.price}
        setBuildingSpots={props.setBuildingSpots}
      />
    </div>
  );
}

export default RealEstate;

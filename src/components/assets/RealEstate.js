import React from "react";
import GetRealEstate from "./GetRealEstate";
import buildings from "../main/subcomponents/realEstate";

function RealEstate(props) {
  return (
    <div>
      {buildings.map(el => (
        <GetRealEstate
          name={el.name}
          space={el.space}
          capacity={el.capacity}
          price={el.price}
          setBuildingSpots={props.setBuildingSpots}
        />
      ))}
    </div>
  );
}

export default RealEstate;

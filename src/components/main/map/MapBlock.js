import React from "react";
import "../../../main.scss";

function MapBlock(props) {
  const buildingInfo = {
    name: props.name,
    space: props.space,
    capacity: props.capacity,
    price: props.price,
    id: props.id
  };

  function passBuildingBlock() {
    props.setBuilding(buildingInfo);
  }

  return <div className="map_block" onClick={passBuildingBlock}></div>;
}

export default MapBlock;

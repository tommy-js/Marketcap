import React, { useState, useEffect } from "react";
import "../../../main.scss";

function MapBlock(props) {
  const [opacity, setOpacity] = useState(0.6);
  const [coloring, setColoring] = useState("red");
  const buildingInfo = {
    name: props.name,
    price: props.price,
    capacity: props.capacity,
    space: props.space,
    id: props.id
  };

  useEffect(() => {
    if (props.buildingId != props.id) {
      setOpacity(0.6);
    } else {
      setOpacity(1);
    }
    if (props.ownedBuildings.some(el => props.id === el.id)) {
      setColoring("blue");
    }
  });

  function passBuildingBlock() {
    props.setBuilding(buildingInfo);
  }

  return (
    <div
      className="map_block"
      style={{ opacity: opacity, backgroundColor: coloring }}
      onClick={passBuildingBlock}
    ></div>
  );
}

export default MapBlock;

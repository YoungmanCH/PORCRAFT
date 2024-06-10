import { useState } from "react";

import adjustIslandForScreenSize from "../features/AdjustScreenSize/AdjustIslandForScreen";
import adjustChessForScreenSize from "../features/AdjustScreenSize/AdjustChessForScreen";
import adjustParkForScreenSize from "../features/AdjustScreenSize/AdjustParkForScreen";
import adjustPizzaForScreenSize from "../features/AdjustScreenSize/AdjustPizzaForScreen";
import adjustYggdrasillForScreenSize from "../features/AdjustScreenSize/AdjustYggdrasillForScreen";
import adjustWinterTerrainForScreenSize from "../features/AdjustScreenSize/AdjustWinterTerrainForScreen";
import adjustAlienPlanetForScreenSize from "../features/AdjustScreenSize/AdjustAlienPlanetForScreen";

const UseField = () => {
  const [field, setField] = useState(null);

  const selectField = (name, fieldPath) => {
    const id = Math.random().toString(36).substring(2, 11);

    let position, rotation, scale;

    switch (name) {
      case "Tropical Island":
        [position, rotation, scale] = adjustIslandForScreenSize();
        break;
      case "Chess":
        [position, rotation, scale] = adjustChessForScreenSize();
        break;
      case "Park":
        [position, rotation, scale] = adjustParkForScreenSize();
        break;
      case "Pizza":
        [position, rotation, scale] = adjustPizzaForScreenSize();
        break;
      case "Tree Island":
        [position, rotation, scale] = adjustYggdrasillForScreenSize();
        break;
      case "Winter Terrain":
        [position, rotation, scale] = adjustWinterTerrainForScreenSize();
        break;
      case "Alien Planet":
        [position, rotation, scale] = adjustAlienPlanetForScreenSize();
        break;
      default:
        position = [0, 0, 0];
        rotation = [0, 0, 0];
        scale = [1, 1, 1];
        break;
    }

    const newField = {
      id,
      name,
      fieldPath,
      position,
      rotation,
      scale,
    };

    setField(newField);
  };

  const serializeField = (selectedField) => {
    if (selectedField) {
      const serializedField = {
        id: selectedField.id,
        name: selectedField.name,
        path: selectedField.fieldPath,
        position: selectedField.position,
        rotation: selectedField.rotation,
        scale: selectedField.scale,
      };

      return JSON.stringify(serializedField, null, 2);
    }
    return null;
  };

  return [field, selectField, serializeField];
};

export default UseField;

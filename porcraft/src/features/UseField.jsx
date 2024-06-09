import { useState } from "react";

import adjustIslandForScreenSize from "../features/AdjustScreenSize/AdjustIslandForScreen";
import adjustChessForScreenSize from "../features/AdjustScreenSize/AdjustChessForScreen";
import adjustParkForScreenSize from "../features/AdjustScreenSize/AdjustParkForScreen";
import adjustPizzaForScreenSize from "../features/AdjustScreenSize/AdjustPizzaForScreen";
import adjustYggdrasillForScreenSize from "../features/AdjustScreenSize/AdjustYggdrasillForScreen";

const UseField = () => {
  const [field, setField] = useState(null);

  const selectField = (name, modelPath) => {
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
      default:
        position = [0, 0, 0];
        rotation = [0, 0, 0];
        scale = [1, 1, 1];
        break;
    }

    const newField = {
      id,
      name,
      modelPath,
      position,
      rotation,
      scale,
    };

    setField(newField);
  };

  const serializeField = (selectedField) => {
    console.log('selectedField:', selectedField);
    if (selectedField) {
      const serializedField = {
        id: selectedField.id,
        name: selectedField.name,
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

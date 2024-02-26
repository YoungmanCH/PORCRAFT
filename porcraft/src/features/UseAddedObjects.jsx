import { useState } from "react";
import adjustDragonForScreenSize from "./AdjustScreenSize/AdjustDragonForScreenSize";
import adjustPersonForScreenSize from "./AdjustScreenSize/AdjustPersonForScreenSize";
import adjustHouseForScreenSize from "./AdjustScreenSize/AdjustHouseForScreenSize";
import adjustKingForScreenSize from "./AdjustScreenSize/AdjustKingForScreenSize";

const useAddedObjects = () => {
  // objects: [{ id: String, type: String, position: Array }]
  const [objects, setObjects] = useState([]);

  // オブジェクトにデフォルトの座標を設定
  const position = [0, 0, 0];

  // オブジェクトにデフォルトの回転座標を設定
  const rotation = [0, 0, 0];

  // オブジェクトにデフォルトのスケールを設定
  let scale = [0.05, 0.05, 0.05];

  const [dragonScale] = adjustDragonForScreenSize();
  const [personScale] = adjustPersonForScreenSize();
  const [houseScale] = adjustHouseForScreenSize();
  const [kingScale] =  adjustKingForScreenSize();

  const addObject = (name, modelPath) => {
    // 簡易的なID生成
    const id = Math.random().toString(36).substr(2, 9);

    // オブジェクトの種別毎にデフォルトのスケールを設定
    if (name === "Flying dragon") scale = dragonScale;
    if (name === "Normal person") scale = personScale;
    if (name === "House") scale = houseScale;
    if (name === "King") scale = kingScale;

    setObjects((currentObjects) => [
      ...currentObjects,
      { id, name, position, rotation, scale, modelPath },
    ]);
  };

  const setPosition = (id, newPosition) => {
    setObjects((currentObjects) =>
      currentObjects.map((obj) =>
        obj.id === id ? { ...obj, position: newPosition } : obj
      )
    );
  };

  const setRotation = (id, newRotation) => {
    setObjects((currentObjects) =>
      currentObjects.map((obj) =>
        obj.id === id ? { ...obj, rotation: newRotation } : obj
      )
    );
  };

  const setScale = (id, newScale) => {
    setObjects((currentObjects) =>
      currentObjects.map((obj) =>
        obj.id === id ? { ...obj, scale: newScale } : obj
      )
    );
  };

  const removeObject = (id) => {
    setObjects((currentObjects) =>
      currentObjects.filter((obj) => obj.id !== id)
    );
  };

  const serializeObjects = (objects) => {
    console.log("serializeObjects:", { objects });
    const sceneObjects = objects.map((obj) => {
      return {
        id: obj.id,
        name: obj.name, // 例: 'Island', 'ObjectComponent'
        position: [obj.position[0], obj.position[1], obj.position[2]],
        rotation: [obj.rotation[0], obj.rotation[1], obj.rotation[2]],
        scale: [obj.scale[0], obj.scale[1], obj.scale[2]],
      };
    });

    return JSON.stringify(sceneObjects, null, 2); // 整形してJSON文字列を返す
  };

  return [
    objects,
    addObject,
    setPosition,
    setRotation,
    setScale,
    removeObject,
    serializeObjects,
  ];
};

export default useAddedObjects;

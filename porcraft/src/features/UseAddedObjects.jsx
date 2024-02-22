import { useState } from 'react';

const useAddedObjects = () => {
  // objects: [{ id: String, type: String, position: Array }]
  const [objects, setObjects] = useState([]);

  // オブジェクトにデフォルトの座標を設定
  const position = [0, 0, 0];

  // オブジェクトにデフォルトの回転座標を設定  
  const rotation = [0, 0, 0];

  // オブジェクトにデフォルトのスケールを設定  
  const scale = [0.05, 0.05, 0.05];

  const addObject = (name) => {
    // 簡易的なID生成
    const id = Math.random().toString(36).substr(2, 9);

    setObjects(currentObjects => [
      ...currentObjects, 
      { id, name, position, rotation, scale }
    ]);
  };

  const setPosition = (id, newPosition) => {
    setObjects(currentObjects =>
      currentObjects.map(obj =>
        obj.id === id ? { ...obj, position: newPosition } : obj
      )
    );
  }

  const setRotation = (id, newRotation) => {
    setObjects(currentObjects =>
      currentObjects.map(obj =>
        obj.id === id ? { ...obj, rotation: newRotation } : obj
      )
    );
  }

  const setScale = (id, newScale) => {
    setObjects(currentObjects =>
      currentObjects.map(obj =>
        obj.id === id ? { ...obj, scale: newScale } : obj
      )
    );
  }

  return [objects, addObject, setPosition, setRotation, setScale];
};

export default useAddedObjects;
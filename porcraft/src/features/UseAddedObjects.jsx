import { useState } from 'react';

const useAddedObjects = () => {
  // objects: [{ id: String, type: String, position: Array }]
  const [objects, setObjects] = useState([]);

  // オブジェクトにデフォルトの座標を設定
  const position = [0, 0, 0];

  // オブジェクトにデフォルトの回転座標を設定  
  const rotation = [0, 0, 0];

  const addObject = (name) => {
    // 簡易的なID生成
    const id = Math.random().toString(36).substr(2, 9);

    setObjects(currentObjects => [
      ...currentObjects, 
      { id, name, position, rotation }
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

  return [objects, addObject, setPosition, setRotation];
};

export default useAddedObjects;
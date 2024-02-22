import { useState } from 'react';

const useAddedObjects = () => {
  // objects: [{ id: String, type: String, position: Array }]
  const [objects, setObjects] = useState([]);
  // オブジェクトにデフォルトの位置を設定
  const position = [0, 0, 0];

  const addObject = (name) => {
    // 簡易的なID生成
    const id = Math.random().toString(36).substr(2, 9);

    setObjects(currentObjects => [
      ...currentObjects, 
      { id, name, position }
    ]);
  };

  const setPosition = (id, newPosition) => {
    setObjects(currentObjects =>
      currentObjects.map(obj =>
        obj.id === id ? { ...obj, position: newPosition } : obj
      )
    );
  }

  return [objects, addObject, setPosition];
};

export default useAddedObjects;
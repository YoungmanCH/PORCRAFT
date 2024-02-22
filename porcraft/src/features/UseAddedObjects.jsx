import { useState } from 'react';

const useAddedObjects = () => {
  // objects: [{ id: String, type: String, position: Array }]
  const [objects, setObjects] = useState([]);

  const addObject = (name) => {
    // 簡易的なID生成
    const id = Math.random().toString(36).substr(2, 9);

    // オブジェクトにデフォルトの位置を設定
    // const position = [0, 0, 0];

    // setObjects(currentObjects => [
    //   ...currentObjects, 
    //   { id, name, position }
    // ]);
    setObjects(currentObjects => [
      ...currentObjects, 
      { id, name }
    ]);
  };

  console.log(objects);

  return [objects, addObject];
};

export default useAddedObjects;
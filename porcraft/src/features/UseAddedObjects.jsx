import { useState } from 'react';

const useAddedObjects = () => {
  // objects: []
  const [objects, setObjects] = useState([]);

  const addObject = (modelName) => {
    setObjects(currentObjects => [...currentObjects, modelName]);
  };

  return [objects, addObject];
};

export default useAddedObjects;

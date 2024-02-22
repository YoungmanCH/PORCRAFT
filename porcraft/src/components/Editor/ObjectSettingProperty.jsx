/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ObjectSettingProperty = ({
  id,
  name,
  position,
  rotation,
  setPosition,
  setRotation,
}) => {
  const [currentPosition, setCurrentPosition] = useState({
    x: position[0],
    y: position[1],
    z: position[2],
  });
  const [currentRotation, setCurrentRotation] = useState({
    x: rotation[0],
    y: rotation[1],
    z: rotation[2],
  });
  const [scale, setScale] = useState({ x: "", y: "", z: "" });

  const handleChangePosition = (e) => {
    const { name, value } = e.target;
    setCurrentPosition((prevPosition) => ({
      ...prevPosition,
      [name]: value.slice(0, 5), // 最大5桁の数字を保持
    }));
    // console.log("currentPosition:", { currentPosition });
  };

  const handleChangeRotation = (e) => {
    const { name, value } = e.target;
    setCurrentRotation((prevRotation) => ({
      ...prevRotation,
      [name]: value.slice(0, 5), // 最大5桁の数字を保持
    }));
    console.log('currentRotation:', {currentRotation})
  };

  const handleChangeScale = (e) => {
    const { name, value } = e.target;
    setScale((prevScale) => ({
      ...prevScale,
      [name]: value.slice(0, 5), // 最大5桁の数字を保持
    }));
  };

  useEffect(() => {
    if (
      position.x !== currentPosition.x ||
      position.y !== currentPosition.y ||
      position.z !== currentPosition.z
    ) {
      setPosition(id, [
        currentPosition.x,
        currentPosition.y,
        currentPosition.z,
      ]);
    }

    if (
      rotation.x !== currentRotation.x ||
      rotation.y !== currentRotation.y ||
      rotation.z !== currentRotation.z
    ) {
      setRotation(id, [
        currentRotation.x,
        currentRotation.y,
        currentRotation.z,
      ]);
    }
  }, [currentPosition, currentRotation]);

  return (
    <div className="font-semibold">
      {name}
      <div className="flex items-center space-x-4">
        <div>
          Position
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <label htmlFor="position-x" className="w-4">
                X:
              </label>
              <input
                id="position-x"
                name="x"
                type="number"
                className="text-gray-800 w-16"
                value={currentPosition.x}
                onChange={handleChangePosition}
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="position-y" className="w-4">
                Y:
              </label>
              <input
                id="position-y"
                name="y"
                type="number"
                className="text-gray-800 w-16"
                value={currentPosition.y}
                onChange={handleChangePosition}
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="position-z" className="w-4">
                Z:
              </label>
              <input
                id="position-z"
                name="z"
                type="number"
                className="text-gray-800 w-16"
                value={currentPosition.z}
                onChange={handleChangePosition}
              />
            </div>
          </div>
        </div>

        <div>
          Rotation
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <label htmlFor="rotation-x" className="w-4">
                X:
              </label>
              <input
                id="rotation-x"
                name="x"
                type="number"
                className="text-gray-800 w-16"
                value={currentRotation.x}
                onChange={handleChangeRotation}
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="rotation-y" className="w-4">
                Y:
              </label>
              <input
                id="rotation-y"
                name="y"
                type="number"
                className="text-gray-800 w-16"
                value={currentRotation.y}
                onChange={handleChangeRotation}
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="rotation-z" className="w-4">
                Z:
              </label>
              <input
                id="rotation-z"
                name="z"
                type="number"
                className="text-gray-800 w-16"
                value={currentRotation.z}
                onChange={handleChangeRotation}
              />
            </div>
          </div>
        </div>

        <div>
          Scale
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <label htmlFor="scale-x" className="w-4">
                X:
              </label>
              <input
                id="scale-x"
                name="x"
                type="number"
                className="text-gray-800 w-16"
                value={scale.x}
                onChange={handleChangeScale}
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="scale-y" className="w-4">
                Y:
              </label>
              <input
                id="scale-y"
                name="y"
                type="number"
                className="text-gray-800 w-16"
                value={scale.y}
                onChange={handleChangeScale}
              />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="scale-z" className="w-4">
                Z:
              </label>
              <input
                id="scale-z"
                name="z"
                type="number"
                className="text-gray-800 w-16"
                value={scale.z}
                onChange={handleChangeScale}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ObjectSettingProperty;

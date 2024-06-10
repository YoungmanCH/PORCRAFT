/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const ObjectSettingProperty = ({
  id,
  name,
  position,
  rotation,
  scale,
  popupTitle,
  popupContent,
  setPosition,
  setRotation,
  setScale,
  setPopupTitle,
  setPopupContent,
  removeObject,
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
  const [currentScale, setCurrentScale] = useState({
    x: scale[0],
    y: scale[1],
    z: scale[2],
  });

  const [currentTitle, setCurrentTitle] = useState(popupTitle);
  const [currentContent, setCurrentContent] = useState(popupContent);

  const [visibility, setVisibility] = useState({
    transform: false,
    popup: false,
  });

  const handleChangePosition = (e) => {
    const { name, value } = e.target;
    setCurrentPosition((prevPosition) => ({
      ...prevPosition,
      [name]: value.slice(0, 6), // 最大6桁の数字を保持
    }));
  };

  const handleChangeRotation = (e) => {
    const { name, value } = e.target;
    setCurrentRotation((prevRotation) => ({
      ...prevRotation,
      [name]: value.slice(0, 6), // 最大6桁の数字を保持
    }));
  };

  const handleChangeScale = (e) => {
    const { name, value } = e.target;
    setCurrentScale((prevScale) => ({
      ...prevScale,
      [name]: value.slice(0, 6), // 最大6桁の数字を保持
    }));
  };

  const handleRemoveObject = (id) => {
    removeObject(id);
  };

  const handleVisibilityToggle = (key) => {
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
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

    if (
      scale.x !== currentScale.x ||
      scale.y !== currentScale.y ||
      scale.z !== currentScale.z
    ) {
      setScale(id, [currentScale.x, currentScale.y, currentScale.z]);
    }

    if (popupTitle !== currentTitle) {
      setPopupTitle(id, currentTitle);
    }

    if (popupContent != currentContent) {
      setPopupContent(id, currentContent);
    }
  }, [
    currentPosition,
    currentRotation,
    currentScale,
    currentTitle,
    currentContent,
  ]);

  return (
    <div>
      <div className="flex justify-between bg-neutral-800">
        <span className="text-zinc-400 p-1">{name}</span>
        <button
          className="rounded-full text-zinc-400 p-1 text-xs"
          onClick={() => handleRemoveObject(id)}
        >
          ✕
        </button>
      </div>
      <div
        className="flex items-center ml-2"
        onClick={() => handleVisibilityToggle("transform")}
      >
        <div
          id="arrowButton"
          className={`arrow-button ${
            visibility.transform ? "arrow-down" : "arrow-right"
          }`}
        ></div>
        <div className="text-zinc-400 ml-2">Transform</div>
      </div>
      {visibility.transform && (
        <div className="flex items-center text-zinc-400 space-x-4 rounded-xl px-3 mx-2 overflow-hidden">
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
                  className="bg-neutral-800 text-zinc-400 w-16"
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
                  className="bg-neutral-800 text-zinc-400 w-16"
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
                  className="bg-neutral-800 text-zinc-400 w-16"
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
                  className="bg-neutral-800 text-zinc-400 w-16"
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
                  className="bg-neutral-800 text-zinc-400 w-16"
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
                  className="bg-neutral-800 text-zinc-400 w-16"
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
                  className="bg-neutral-800 text-zinc-400 w-16"
                  value={currentScale.x}
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
                  className="bg-neutral-800 text-zinc-400 w-16"
                  value={currentScale.y}
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
                  className="bg-neutral-800 text-zinc-400 w-16"
                  value={currentScale.z}
                  onChange={handleChangeScale}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="flex items-center ml-2"
        onClick={() => handleVisibilityToggle("popup")}
      >
        <div
          id="arrowButton"
          className={`arrow-button ${
            visibility.popup ? "arrow-down" : "arrow-right"
          }`}
        ></div>
        <div className="text-zinc-400 ml-2">Popup</div>
      </div>
      {visibility.popup && (
        <>
          <div className="flex items-center space-x-4 rounded-xl px-3 mx-2 overflow-hidden pb-1">
            <div className="w-28">
              <label className="text-zinc-400">title:</label>
            </div>
            <div className="flex space-x-2 w-full">
              <input
                type="text"
                className="w-full bg-neutral-800 text-zinc-400"
                value={currentTitle}
                onChange={(e) => setCurrentTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-4 rounded-xl px-3 mx-2 overflow-auto">
            <div className="w-28">
              <label className="text-zinc-400">content:</label>
            </div>
            <div className="flex items-center space-x-2 w-full">
              <textarea
                className="bg-neutral-800 text-zinc-400 w-full"
                rows="4"
                value={currentContent}
                onChange={(e) => setCurrentContent(e.target.value)}
              />
            </div>
          </div>
        </>
      )}
      <hr />
    </div>
  );
};

export default ObjectSettingProperty;

import { useState } from "react";

import "../css/ObjSetting.css";

const ObjectSetting = () => {
  const [isObjSelectorOpen, setObjSettingOpen] = useState(false);
  const [position, setPosition] = useState({ x: "", y: "", z: "" });
  const [rotation, setRotation] = useState({ x: "", y: "", z: "" });

  const handleChangePosition = (e) => {
    const { name, value } = e.target;
    setPosition((prevPosition) => ({
      ...prevPosition,
      [name]: value.slice(0, 3), // 最大3桁の数字を保持
    }));
  };

  const handleChangeRotation = (e) => {
    const { name, value } = e.target;
    setRotation((prevRotation) => ({
      ...prevRotation,
      [name]: value.slice(0, 3), // 最大3桁の数字を保持
    }));
  };

  return (
    <section className="open-setting-btn">
      <button className="btn" onClick={() => setObjSettingOpen(true)}>
        Setting
      </button>
      <div className={`objSetting ${isObjSelectorOpen ? "open" : ""}`}>
        {/* 右サイドバーのコンテンツ */}
        <button className="btn" onClick={() => setObjSettingOpen(false)}>
          Close
        </button>
        <br />
        <br />
        <div className="font-semibold">Settings</div>
        <hr />

        <div className="font-semibold">
          Flying dragon
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
                    className="text-gray-800 w-12"
                    value={position.x}
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
                    className="text-gray-800 w-12"
                    value={position.y}
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
                    className="text-gray-800 w-12"
                    value={position.z}
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
                    className="text-gray-800 w-12"
                    value={rotation.x}
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
                    className="text-gray-800 w-12"
                    value={rotation.y}
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
                    className="text-gray-800 w-12"
                    value={rotation.z}
                    onChange={handleChangeRotation}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectSetting;

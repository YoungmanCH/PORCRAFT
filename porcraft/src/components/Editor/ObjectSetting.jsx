/* eslint-disable react/prop-types */

import { useState } from "react";

import "../css/ObjSetting.css";
import ObjectSettingProperty from "./ObjectSettingProperty";

const ObjectSetting = ({
  objects,
  setPosition,
  setRotation,
  setScale,
  removeObject,
}) => {
  const [isObjSelectorOpen, setObjSettingOpen] = useState(false);

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
        {objects.map((obj) => (
          <ObjectSettingProperty
            key={obj.id}
            setPosition={setPosition}
            setRotation={setRotation}
            setScale={setScale}
            removeObject={removeObject}
            {...obj}
          />
        ))}
      </div>
    </section>
  );
};

export default ObjectSetting;

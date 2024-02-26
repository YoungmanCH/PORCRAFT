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
      <button className="trans-btn mt-3 mr-3 w-5" onClick={() => setObjSettingOpen(true)}>
        Setting
      </button>
      <div className={`objSetting ${isObjSelectorOpen ? "open" : ""}`}>
        {/* 右サイドバーのコンテンツ */}
        <button className="trans-btn mt-2 mr-2 " onClick={() => setObjSettingOpen(false)}>
          Close
        </button>
        <br />
        <br />
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

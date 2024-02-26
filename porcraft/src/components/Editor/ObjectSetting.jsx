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
      {!isObjSelectorOpen && (
        <button className="trans-btn mt-3 mr-3 w-5" onClick={() => setObjSettingOpen(true)}>
          Setting
        </button>
      )}
      <div className={`objSetting ${isObjSelectorOpen ? "open" : ""}`}>
        {/* 右サイドバーのコンテンツ */}
        {isObjSelectorOpen && (
          <button className="trans-btn mt-2 right-2 max-w-40 ml-40" onClick={() => setObjSettingOpen(false)}>
            Close
          </button>
        )}
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

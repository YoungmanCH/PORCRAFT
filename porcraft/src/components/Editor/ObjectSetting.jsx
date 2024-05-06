/* eslint-disable react/prop-types */

import { useState } from "react";
import "../css/ObjSetting.css";
import ObjectSettingProperty from "./ObjectSettingProperty";

const ObjectSetting = ({
  objects,
  setPosition,
  setRotation,
  setScale,
  setPopupTitle,
  setPopupContent,
  removeObject,
}) => {
  const [isObjSelectorOpen, setObjSettingOpen] = useState(false);

  return (
    <section className="open-setting-btn">
      {!isObjSelectorOpen && (
        <button className="text-zinc-400 bg-neutral-800 rounded-md px-4 py-2 text-center mt-1 mr-1" onClick={() => setObjSettingOpen(true)}>
          Inspector
        </button>
      )}
      <div className={`objSetting ${isObjSelectorOpen ? "open" : ""}`}>
        {/* 右サイドバーのコンテンツ */}
        {isObjSelectorOpen && (
          <button className="text-zinc-400 bg-neutral-800 rounded-md px-1 text-center mt-2 ml-2" onClick={() => setObjSettingOpen(false)}>
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
            setPopupTitle={setPopupTitle}
            setPopupContent={setPopupContent}
            removeObject={removeObject}
            {...obj}
          />
          
        ))}
      </div>
    </section>
  );
};

export default ObjectSetting;

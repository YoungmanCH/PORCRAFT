import { useLocation } from "react-router-dom";
import React,{useState} from "react";

import EditorCanvas from "../components/Editor/EditorCanvas";
import ExportButton from "../components/Editor/ExportButton";
import ObjectSelector from "../components/Editor/ObjectSelector";
import ObjectSetting from "../components/Editor/ObjectSetting";
import Popup from "../components/Popup";

import useAddedObjects from "../features/UseAddedObjects";

const Editor = () => {
  const [
    objects,
    addObject,
    setPosition,
    setRotation,
    setScale,
    removeObject,
    serializeObjects,
  ] = useAddedObjects();
  const [isPopupVisible,setIsPopupVisible]=useState(false);
  const location = useLocation();
  const { fieldName } = location.state || {}; 

  return (
    <section className="w-full h-screen flex overflow-hidden">
      {/* オブジェクト選択エリア */}
      <ObjectSelector objects={objects} addObject={addObject} />

      {/* Exportボタン */}
      <ExportButton objects={objects} serializeObjects={serializeObjects} />

      <div className="btn">
        {/* ポップアップを開くボタン */}
        <button onClick={() => setIsPopupVisible(true)}>ポップアップを開く</button>

      {/* ポップアップの表示 */}
        {isPopupVisible && <Popup setIsVisible={setIsPopupVisible}/>}
      </div>

      {/* 3Dエディタエリア */}
      <div className="flex-grow h-full">
        <EditorCanvas fieldName={fieldName} objects={objects} setScale={setScale} />

        <Popup/>
    

      </div>

      {/* オブジェクト設定エリア */}
      <ObjectSetting
        objects={objects}
        setPosition={setPosition}
        setRotation={setRotation}
        setScale={setScale}
        removeObject={removeObject}
      />
    </section>
  );
};

export default Editor;

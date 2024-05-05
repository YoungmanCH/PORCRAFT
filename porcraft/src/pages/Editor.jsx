/* eslint-disable react-hooks/exhaustive-deps */

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import EditorCanvas from "../components/Editor/EditorCanvas";
import ExportButton from "../components/Editor/ExportButton";
import ObjectSelector from "../components/Editor/ObjectSelector";
import ObjectSetting from "../components/Editor/ObjectSetting";
import Popup from "../components/Popup";

import useAddedObjects from "../features/UseAddedObjects";
import UseField from "../features/UseField";

const Editor = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const location = useLocation();
  const { fieldName, fieldPath } = location.state || {};

  const [
    objects,
    addObject,
    setPosition,
    setRotation,
    setScale,
    removeObject,
    serializeObjects,
  ] = useAddedObjects();
  
  const [field, selectField, serializeField] = UseField();

  useEffect(() => {
    selectField(fieldName, fieldPath);
  }, []);

  return (
    <section className="w-full h-screen flex overflow-hidden">
      {/* オブジェクト選択エリア */}
      <ObjectSelector objects={objects} addObject={addObject} />

      {/* Exportボタン */}
      <ExportButton
        objects={objects}
        field={field}
        serializeObjects={serializeObjects}
        serializeField={serializeField}
      />

      {/* ポップアップ表示ボタン */}
      <div className="popup-btn">
        <button
          className="trans-btn mt-24 ml-3"
          onClick={() => setIsPopupVisible(true)}
        >
          ポップアップを開く
        </button>
      </div>
      
      {/* ポップアップコンポーネント */}
      <Popup isVisible={isPopupVisible} setIsVisible={setIsPopupVisible} />

      {/* 3Dエディタエリア */}
      <div className="flex-grow h-full">
        <EditorCanvas
          field={field}
          objects={objects}
          setScale={setScale}
        />
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

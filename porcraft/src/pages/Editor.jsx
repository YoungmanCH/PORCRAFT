/* eslint-disable react-hooks/exhaustive-deps */

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import EditorCanvas from "../components/Editor/EditorCanvas";
import ExportButton from "../components/Editor/ExportButton";
import ObjectSelector from "../components/Editor/ObjectSelector";
import ObjectSetting from "../components/Editor/ObjectSetting";

import UseAddedObjects from "../features/UseAddedObjects";
import UseField from "../features/UseField";

const Editor = () => {
  const location = useLocation();
  const { id, fieldName, fieldPath } = location.state || {};

  const [
    objects,
    addObject,
    setPosition,
    setRotation,
    setScale,
    setPopupTitle,
    setPopupContent,
    removeObject,
    serializeObjects,
  ] = UseAddedObjects();
  
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
        id={id}
        objects={objects}
        field={field}
        serializeObjects={serializeObjects}
        serializeField={serializeField}
      />

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
        setPopupTitle={setPopupTitle}
        setPopupContent={setPopupContent}
        removeObject={removeObject}
      />
    </section>
  );
};

export default Editor;

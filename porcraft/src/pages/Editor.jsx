import EditorCanvas from "../components/Editor/EditorCanvas";
import ExportButton from "../components/Editor/ExportButton";
import ObjectSelector from "../components/Editor/ObjectSelector";
import ObjectSetting from "../components/Editor/ObjectSetting";

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

  return (
    <section className="w-full h-screen flex overflow-hidden">
      {/* オブジェクト選択エリア */}
      <ObjectSelector objects={objects} addObject={addObject} />

      {/* Exportボタン */}
      <ExportButton objects={objects} serializeObjects={serializeObjects} />

      {/* 3Dエディタエリア */}
      <div className="flex-grow h-full">
        <EditorCanvas objects={objects} setScale={setScale} />
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

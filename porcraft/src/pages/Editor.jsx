import EditorCanvas from "../components/Editor/EditorCanvas";
import ObjectSelector from "../components/Editor/ObjectSelector";
import ObjectSetting from "../components/Editor/ObjectSetting";

import useAddedObjects from "../features/UseAddedObjects";

const Editor = () => {
  const [objects, addObject, setPosition] = useAddedObjects();

  return (
    <section className="w-full h-screen flex overflow-hidden">
      {/* オブジェクト選択エリア */}
      <ObjectSelector objects={objects} addObject={addObject} />

      {/* 3Dエディタエリア */}
      <div className="flex-grow h-full">
        <EditorCanvas objects={objects}/>
      </div>

      {/* オブジェクト設定エリア */}
      <ObjectSetting objects={objects} setPosition={setPosition}/>
    </section>
  );
};

export default Editor;

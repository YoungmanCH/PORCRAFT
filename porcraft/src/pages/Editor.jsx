import { useEffect } from "react";

import ObjectSelector from "../components/Editor/ObjectSelector";
import EditorCanvas from "../components/Editor/EditorCanvas";
import useAddedObjects from "../features/UseAddedObjects";
import ObjectSetting from "../components/Editor/ObjectSetting";

const Editor = () => {
  const [objects, addObject] = useAddedObjects();

  useEffect(() => {
    console.log("Editor: objects updated", objects)
  }, [objects]);


  return (
    <section className="w-full h-screen flex overflow-hidden">
      {/* オブジェクト選択エリア */}
      <ObjectSelector objects={objects} addObject={addObject} />

      {/* 3Dエディタエリア */}
      <div className="flex-grow h-full">
        <EditorCanvas objects={objects}/>
      </div>

      {/* オブジェクト設定エリア */}
      <ObjectSetting objects={objects} />
    </section>
  );
};

export default Editor;

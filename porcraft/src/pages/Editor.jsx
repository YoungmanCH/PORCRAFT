import { useState } from "react";

import ObjectSelector from "../components/Editor/ObjectSelector";
import EditorCanvas from "../components/Editor/EditorCanvas";

// 仮の3Dオブジェクトコンポーネント（例：Box）
// const Box = (props) => (
//   <mesh {...props}>
//     <boxGeometry args={[1, 1, 1]} />
//     <meshStandardMaterial color={"orange"} />
//   </mesh>
// );

const Editor = () => {
  const [objects, setObjects] = useState([]);

  const addObject = (type) => {
    const id = Math.random().toString(36).substr(2, 9); // 簡易的なID生成
    setObjects([...objects, { id, type, position: [0, 0, 0] }]);
  };

  return (
    <section className="w-full h-screen flex overflow-hidden">
      {/* オブジェクト選択エリア */}
      <ObjectSelector addObject={addObject} />

      {/* 3Dエディタエリア */}
      <div className="flex-grow h-full">
        <EditorCanvas objects={objects} />
      </div>
    </section>
  );
};

export default Editor;

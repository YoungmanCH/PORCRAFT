/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Loader from "../Loader";

import ObjectComponents from "../ObjectComponents";
import FieldComponents from "./FieldComponents";
import Popup from "../Popup";

const EditorCanvas = ({ field, objects }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);

  const handleObjectClick = (object) => {
    setSelectedObject(object);
    setIsPopupVisible((prev) => !prev);
    console.log(`isPopupVisible is ${isPopupVisible}`);
  };

  // 選択されたフィールドに基づいてコンポーネントをレンダリング
  return (
    <>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* フィールドデータ */}
        <FieldComponents field={field} />

        {objects.map((obj) => (
          <ObjectComponents
            fallback={<Loader />}
            key={obj.id}
            onClick={() => handleObjectClick(obj)}
            {...obj}
          />
        ))}
        <OrbitControls />
      </Canvas>
      
      {/* ポップアップコンポーネント */}
      {isPopupVisible && (
        <Popup isVisible={isPopupVisible} setIsVisible={setIsPopupVisible} />
      )}
      {/* {isPopupVisible && <Popup object={selectedObject} onClose={() => setIsPopupVisible} />} */}
    </>
  );
};

export default EditorCanvas;

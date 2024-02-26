/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Loader from "../Loader";

import Island from "../../models/Island";
import Chess from "../../models/Chess";
import Pizza from "../../models/Park";
import Park from "../../models/Park";
import Yggdrasill from "../../models/Yggdrasill";


import ObjectComponents from "../ObjectComponents";
import FieldComponents from "./FieldComponents";

const EditorCanvas = ({ fieldName, fieldPath, objects, setScale }) => {
  // 選択されたフィールドに基づいてコンポーネントをレンダリング

  return (
    <Canvas
      className="w-full h-screen bg-transparent"
      camera={{ near: 0.1, far: 1000 }}
    >
      <FieldComponents name={fieldName} path={fieldPath}/>

      <Suspense fallback={<Loader />}>
        
        {objects.map((obj) => (
          <ObjectComponents key={obj.id} setScale={setScale} {...obj} />
        ))}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default EditorCanvas;

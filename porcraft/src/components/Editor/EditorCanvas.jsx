/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loader from "../Loader";
import Island from "../../models/Island";
import adjustIslandForScreenSize from "../../features/AdjustScreenSize/AdjustIslandForScreen";
import adjustChessForScreenSize from "../../features/AdjustScreenSize/AdjustChessForScreen";
import ObjectComponents from "../ObjectComponents";

const EditorCanvas = ({ objects, setScale }) => {
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [chessScale, chessPosition, chessRotation] = adjustChessForScreenSize();

  // 選択されたフィールドに基づいてコンポーネントをレンダリング
  return (
    <Canvas
      className="w-full h-screen bg-transparent"
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <Island
          scale={islandScale}
          position={islandPosition}
          rotation={islandRotation}
        />

        {objects.map((obj) => (
          <ObjectComponents key={obj.id} setScale={setScale} {...obj} />
        ))}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default EditorCanvas;

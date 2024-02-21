import { Suspense, useState } from "react";

import "../css/ObjSelector.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Dragon from "../../models/dragon";
import Loader from "../Loader";
import adjustDragonForObjSelectorSize from "../../features/AdjustDragonForObjSelector";

const ObjectSelector = (addObject) => {
  const [isObjSelectorOpen, setObjSelectorOpen] = useState(false);
  const [dragonScale, dragonPosition] = adjustDragonForObjSelectorSize();

  return (
    <section className="open-selector-btn">
      <button onClick={() => setObjSelectorOpen(true)}>Selector</button>
      <div className={`objSelector ${isObjSelectorOpen ? "open" : ""}`}>
        {/* サイドバーのコンテンツ */}
        <button onClick={() => setObjSelectorOpen(false)}>Close</button>

        {/* 他のオブジェクトを追加するボタンもここに配置 */}
        <br />
        <button
          onClick={() => {
            addObject("Box"); // 例えば、Boxオブジェクトを追加する
          }}
        >
          Add Box
        </button>
        <hr />

        <div>
          <p>Flying dragon</p>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />

              <Dragon scale={dragonScale} position={dragonPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <div>
          <p>Flying dragon</p>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />

              <Dragon scale={dragonScale} position={dragonPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <div>
          <p>Flying dragon</p>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />

              <Dragon scale={dragonScale} position={dragonPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default ObjectSelector;

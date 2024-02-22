/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Loader from "../Loader";

import "../css/ObjSelector.css";

import adjustDragonForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustDragonForObjSelector";
import adjustHouseForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustHouseForObjSelectorSize";

import Dragon from "../../models/dragon";
import House from "../../models/house";
import Person from "../../models/person";
import AdjustPersonForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustPersonForObjSelectorSize";

const ObjectSelector = ({ objects, addObject }) => {
  const [isObjSelectorOpen, setObjSelectorOpen] = useState(false);
  const [dragonScale, dragonPosition] = adjustDragonForObjSelectorSize();
  const [personScale, personPosition] = AdjustPersonForObjSelectorSize();
  const [houseScale, housePosition] = adjustHouseForObjSelectorSize();

  const handleAddObject = (name) => {
    addObject(name);
  };

  return (
    <section className="open-selector-btn">
      <button className="btn" onClick={() => setObjSelectorOpen(true)}>
        Selector
      </button>
      <div className={`objSelector ${isObjSelectorOpen ? "open" : ""}`}>
        {/* 左サイドバーのコンテンツ */}
        <button className="btn" onClick={() => setObjSelectorOpen(false)}>
          Close
        </button>

        <br />
        <br />
        <div className="font-semibold">Objects</div>
        <hr />

        <div>
          <div className="flex justify-between">
            <div>Flying dragon</div>
            <button
              className="btn"
              onClick={() => {
                handleAddObject("Flying dragon");
              }}
            >
              Use
            </button>
          </div>
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
        <hr />

        <div>
          <div className="flex justify-between">
            <div>Normal person</div>
            <button
              className="btn"
              onClick={() => {
                handleAddObject("Normal person");
              }}
            >
              Use
            </button>
          </div>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 10, 1]} intensity={10} />
              <ambientLight intensity={10} />
              <hemisphereLight intensity={10} />

              <Person scale={personScale} position={personPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <hr />

        <div>
          <div className="flex justify-between">
            <div>House</div>
            <button
              className="btn"
              onClick={() => {
                handleAddObject("House");
              }}
            >
              Use
            </button>
          </div>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 10, 1]} intensity={10} />
              <ambientLight intensity={10} />
              <hemisphereLight intensity={10} />

              <House scale={houseScale} position={housePosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default ObjectSelector;

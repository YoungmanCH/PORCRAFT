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
import adjustPersonForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustPersonForObjSelectorSize";
import adjustKingForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustKingForObjSelectorSize";
import adjustPlaneForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustPlaneForObjSelectorSize";

import adjustBirdOrangeForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustBirdOrangeForObjSelectorSize";
import adjustQueenForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustQueenForObjSelectorSize";

import Dragon from "../../models/Dragon";
import House from "../../models/House";
import Person from "../../models/Person";
import King from "../../models/King";
import Plane from "../../models/Plane";
import BirdOrange from "../../models/BirdOrange";
import Queen from "../../models/Queen";

const ObjectSelector = ({ objects, addObject }) => {
  const [isObjSelectorOpen, setObjSelectorOpen] = useState(false);

  const [dragonScale, dragonPosition] = adjustDragonForObjSelectorSize();
  const [personScale, personPosition] = adjustPersonForObjSelectorSize();
  const [houseScale, housePosition] = adjustHouseForObjSelectorSize();
  const [kingScale, kingPosition] = adjustKingForObjSelectorSize();
  const [planeScale, planePosition] = adjustPlaneForObjSelectorSize();
  const [birdOrangeScale, birdOrangePosition] = adjustBirdOrangeForObjSelectorSize();
  const [queenScale, queenPosition] = adjustQueenForObjSelectorSize();

  const handleAddObject = (name, modelPath) => {
    addObject(name, modelPath);
  };

  return (
    <section className="open-selector-btn">
      {!isObjSelectorOpen && (
        <button className="trans-btn mt-3 ml-3" onClick={() => setObjSelectorOpen(true)}>
          Selector
        </button>
      )}
      <div className={`objSelector ${isObjSelectorOpen ? "open" : ""}`}>
        {/* 左サイドバーのコンテンツ */}
        {isObjSelectorOpen && (
          <button className="trans-btn mt-2 ml-2" onClick={() => setObjSelectorOpen(false)}>
            Close
          </button>
        )}
        <br />
        <br />
        <hr />

        <div>
          <div className="flex justify-between bg-white rounded-xl ">
            <p>Flying dragon</p>
            <button
              className="trans-btn "
              onClick={() => {
                handleAddObject("Flying dragon", "/assets/3d/dragon_flying.glb");
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
          <div className="flex justify-between bg-white rounded-xl">
            <div>Normal person</div>
            <button
              className="trans-btn"
              onClick={() => {
                handleAddObject("Normal person", "/assets/3d/person.glb");
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
          <div className="flex justify-between  bg-white rounded-xl">
            <div>Plane</div>
            <button
              className="trans-btn"
              onClick={() => {
                handleAddObject("Plane", "/assets/3d/plane_a340.glb");
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

              <Plane scale={planeScale} position={planePosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <hr />

        <div>
          <div className="flex justify-between  bg-white rounded-xl">
            <div>Queen</div>
            <button
              className="trans-btn"
              onClick={() => {
                handleAddObject("Queen", "/assets/3d/chess_piece_queen.glb");
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

              <Queen scale={queenScale} position={queenPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <hr />

        <div>
          <div className="flex justify-between">
            <div>BirdOrange</div>
            <button
              className="trans-btn"
              onClick={() => {
                handleAddObject("BirdOrange", "/assets/3d/bird_orange.glb");
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

              <BirdOrange scale={birdOrangeScale} position={birdOrangePosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <hr />

        <div>
          <div className="flex justify-between  bg-white rounded-xl">
            <div>King</div>
            <button
              className="trans-btn"
              onClick={() => {
                handleAddObject("King", "/assets/3d/chess_king.glb");
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

              <King scale={kingScale} position={kingPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <hr />


        <div>
          <div className="flex justify-between  bg-white rounded-xl">
            <div>House</div>
            <button
              className="trans-btn"
              onClick={() => {
                handleAddObject("House", "/assets/3d/house.glb");
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

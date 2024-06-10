/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Loader from "../Loader";

import "../css/ObjSelector.css";

import adjustDragonForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustDragonForObjSelectorSize";
import adjustHouseForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustHouseForObjSelectorSize";
import adjustPersonForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustPersonForObjSelectorSize";
import adjustKingForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustKingForObjSelectorSize";
import adjustPlaneForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustPlaneForObjSelectorSize";
import adjustBirdOrangeForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustBirdOrangeForObjSelectorSize";
import adjustQueenForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustQueenForObjSelectorSize";
import adjustSpaceStationForObjSelectorSize from "../../features/AdjustSelectorSize/AdjustSpaceStationForObjSelectorSize";

import Dragon from "../../objects/Dragon";
import House from "../../objects/House";
import Person from "../../objects/Person";
import King from "../../objects/King";
import Plane from "../../objects/Plane";
import OrangeBird from "../../objects/OrangeBird";
import Queen from "../../objects/Queen";
import SpaceStation from "../../objects/SpaceStation";

const ObjectSelector = ({ objects, addObject }) => {
  const [isObjSelectorOpen, setObjSelectorOpen] = useState(false);
  const [visibility, setVisibility] = useState({
    dragon: false,
    normal_person: false,
    house: false,
    king: false,
    plane: false,
    orangeBird: false,
    queen: false,
    spaceStation: false,
  });

  const [dragonScale, dragonPosition] = adjustDragonForObjSelectorSize();
  const [personScale, personPosition] = adjustPersonForObjSelectorSize();
  const [houseScale, housePosition] = adjustHouseForObjSelectorSize();
  const [kingScale, kingPosition] = adjustKingForObjSelectorSize();
  const [planeScale, planePosition] = adjustPlaneForObjSelectorSize();
  const [birdOrangeScale, birdOrangePosition] =
    adjustBirdOrangeForObjSelectorSize();
  const [queenScale, queenPosition] = adjustQueenForObjSelectorSize();
  const [spaceStationScale, spaceStationPosition] =
    adjustSpaceStationForObjSelectorSize();

  const handleAddObject = (name, modelPath) => {
    addObject(name, modelPath);
  };

  const handleVisibilityToggle = (key) => {
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // visibility's name == toggle's name.
  // class's name == addObject's name

  return (
    <section className="open-selector-btn">
      {!isObjSelectorOpen && (
        <button
          className="text-zinc-400 bg-neutral-800 rounded-md px-4 py-2 text-center mt-1 ml-1"
          onClick={() => setObjSelectorOpen(true)}
        >
          Selector
        </button>
      )}
      <div
        className={`objSelector bg-neutral-800 ${
          isObjSelectorOpen ? "open" : ""
        }`}
      >
        {isObjSelectorOpen && (
          <button
            className="text-zinc-400 bg-neutral-800 rounded-md px-1 text-center mt-2 ml-2"
            onClick={() => setObjSelectorOpen(false)}
          >
            Close
          </button>
        )}
        <br />
        <br />
        <hr />

        <div>
          <div className="flex justify-between bg-neutral-800">
            <div className="flex items-center ml-2">
              <button
                id="arrowButton"
                className={`arrow-button ${
                  visibility.dragon ? "arrow-down" : "arrow-right"
                }`}
                onClick={() => handleVisibilityToggle("dragon")}
              ></button>
              <p className="text-zinc-400 ml-2">Flying dragon</p>
            </div>
            <div className="flex-grow"></div>
            <button
              className="text-zinc-400 mr-2"
              onClick={() =>
                handleAddObject("Flying dragon", "/assets/3d/dragon_flying.glb")
              }
            >
              Apply
            </button>
          </div>
          {visibility.dragon && (
            <Canvas className="canvas-container">
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 10, 1]} intensity={10} />
                <ambientLight intensity={10} />
                <hemisphereLight intensity={10} />
                <Dragon scale={dragonScale} position={dragonPosition} />
              </Suspense>
              <OrbitControls />
            </Canvas>
          )}
        </div>

        <div>
          <div className="flex justify-between bg-neutral-800">
            <div className="flex items-center ml-2">
              <button
                id="arrowButton"
                className={`arrow-button ${
                  visibility.normal_person ? "arrow-down" : "arrow-right"
                }`}
                onClick={() => handleVisibilityToggle("normal_person")}
              ></button>
              <p className="text-zinc-400 ml-2">Normal person</p>
            </div>
            <div className="flex-grow"></div>
            <button
              className="text-zinc-400 mr-2"
              onClick={() =>
                handleAddObject("Normal person", "/assets/3d/person.glb")
              }
            >
              Apply
            </button>
          </div>
          {visibility.normal_person && (
            <Canvas className="canvas-container">
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 10, 1]} intensity={10} />
                <ambientLight intensity={10} />
                <hemisphereLight intensity={10} />
                <Person scale={personScale} position={personPosition} />
              </Suspense>
              <OrbitControls />
            </Canvas>
          )}
        </div>

        <div>
          <div className="flex justify-between bg-neutral-800">
            <div className="flex items-center ml-2">
              <button
                id="arrowButton"
                className={`arrow-button ${
                  visibility.plane ? "arrow-down" : "arrow-right"
                }`}
                onClick={() => handleVisibilityToggle("plane")}
              ></button>
              <p className="text-zinc-400 ml-2">Plane</p>
            </div>
            <div className="flex-grow"></div>
            <button
              className="text-zinc-400 mr-2"
              onClick={() =>
                handleAddObject("Plane", "/assets/3d/plane_a340.glb")
              }
            >
              Apply
            </button>
          </div>
          {visibility.plane && (
            <Canvas className="canvas-container">
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 10, 1]} intensity={10} />
                <ambientLight intensity={10} />
                <hemisphereLight intensity={10} />
                <Plane scale={planeScale} position={planePosition} />
              </Suspense>
              <OrbitControls />
            </Canvas>
          )}
        </div>

        <div>
          <div className="flex justify-between bg-neutral-800">
            <div className="flex items-center ml-2">
              <button
                id="arrowButton"
                className={`arrow-button ${
                  visibility.queen ? "arrow-down" : "arrow-right"
                }`}
                onClick={() => handleVisibilityToggle("queen")}
              ></button>
              <p className="text-zinc-400 ml-2">Queen</p>
            </div>
            <div className="flex-grow"></div>
            <button
              className="text-zinc-400 mr-2"
              onClick={() =>
                handleAddObject("Queen", "/assets/3d/chess_piece_queen.glb")
              }
            >
              Apply
            </button>
          </div>
          {visibility.queen && (
            <Canvas className="canvas-container">
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 10, 1]} intensity={10} />
                <ambientLight intensity={10} />
                <hemisphereLight intensity={10} />
                <Queen scale={queenScale} position={queenPosition} />
              </Suspense>
              <OrbitControls />
            </Canvas>
          )}
        </div>
        <div>
          <div className="flex justify-between items-center bg-neutral-800">
            <div className="flex items-center ml-2">
              <button
                id="arrowButton"
                className={`arrow-button ${
                  visibility.OrangeBird ? "arrow-down" : "arrow-right"
                }`}
                onClick={() => handleVisibilityToggle("OrangeBird")}
              ></button>
              <p className="text-zinc-400 ml-2">Orange bird</p>
            </div>
            <div className="flex-grow"></div>
            <button
              className="text-zinc-400 mr-2"
              onClick={() => {
                handleAddObject("Orange bird", "/assets/3d/bird_orange.glb");
              }}
            >
              Apply
            </button>
          </div>
          {visibility.OrangeBird && (
            <Canvas className="canvas-container">
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 10, 1]} intensity={10} />
                <ambientLight intensity={10} />
                <hemisphereLight intensity={10} />

                <OrangeBird
                  scale={birdOrangeScale}
                  position={birdOrangePosition}
                />
              </Suspense>
              <OrbitControls />
            </Canvas>
          )}
        </div>
        <div>
          <div className="flex justify-between bg-neutral-800">
            <div className="flex items-center ml-2">
              <button
                id="arrowButton"
                className={`arrow-button ${
                  visibility.king ? "arrow-down" : "arrow-right"
                }`}
                onClick={() => handleVisibilityToggle("king")}
              ></button>
              <p className="text-zinc-400 ml-2">King</p>
            </div>
            <div className="flex-grow"></div>
            <button
              className="text-zinc-400 mr-2"
              onClick={() =>
                handleAddObject("King", "/assets/3d/chess_king.glb")
              }
            >
              Apply
            </button>
          </div>
          {visibility.king && (
            <Canvas className="canvas-container">
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 10, 1]} intensity={10} />
                <ambientLight intensity={10} />
                <hemisphereLight intensity={10} />
                <King scale={kingScale} position={kingPosition} />
              </Suspense>
              <OrbitControls />
            </Canvas>
          )}
        </div>
        <div>
          <div className="flex justify-between items-center bg-neutral-800">
            <div className="flex items-center ml-2">
              <button
                id="arrowButton"
                className={`arrow-button ${
                  visibility.house ? "arrow-down" : "arrow-right"
                }`}
                onClick={() => handleVisibilityToggle("house")}
              ></button>
              <p className="text-zinc-400 ml-2">House</p>
            </div>
            <div className="flex-grow"></div>
            <button
              className="text-zinc-400 mr-2"
              onClick={() => {
                handleAddObject("House", "/assets/3d/house.glb");
              }}
            >
              Apply
            </button>
          </div>
          {visibility.house && (
            <Canvas className="canvas-container">
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 10, 1]} intensity={10} />
                <ambientLight intensity={10} />
                <hemisphereLight intensity={10} />

                <House scale={houseScale} position={housePosition} />
              </Suspense>
              <OrbitControls />
            </Canvas>
          )}
        </div>
        <div>
          <div className="flex justify-between items-center bg-neutral-800">
            <div className="flex items-center ml-2">
              <button
                id="arrowButton"
                className={`arrow-button ${
                  visibility.spaceStation ? "arrow-down" : "arrow-right"
                }`}
                onClick={() => handleVisibilityToggle("spaceStation")}
              ></button>
              <p className="text-zinc-400 ml-2">Space station</p>
            </div>
            <div className="flex-grow"></div>
            <button
              className="text-zinc-400 mr-2"
              onClick={() => {
                handleAddObject(
                  "Space station",
                  "/assets/3d/space_station.glb"
                );
              }}
            >
              Apply
            </button>
          </div>
          {visibility.spaceStation && (
            <Canvas className="canvas-container">
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 10, 1]} intensity={10} />
                <ambientLight intensity={10} />
                <hemisphereLight intensity={10} />

                <SpaceStation
                  scale={spaceStationScale}
                  position={spaceStationPosition}
                />
              </Suspense>
              <OrbitControls />
            </Canvas>
          )}
        </div>
      </div>
    </section>
  );
};

export default ObjectSelector;

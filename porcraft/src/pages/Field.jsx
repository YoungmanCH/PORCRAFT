/* eslint-disable react/no-unknown-property */

import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Loader from "../components/Loader";

import adjustIslandForFieldSize from "../features/AdjustFieldSize/AdjustIslandForField";
import adjustChessForFieldSize from "../features/AdjustFieldSize/AdjustChessForField";
import adjustPizzaForFieldSize from "../features/AdjustFieldSize/AdjustPizzaForField";
import adjustParkForFieldSize from "../features/AdjustFieldSize/AdjustParkForField";
import adjustYggdrasillForFieldSize from "../features/AdjustFieldSize/AdjustYggdrasill";

import Island from "../models/Island";
import Chess from "../models/Chess";
import Pizza from "../models/Pizza";
import Park from "../models/Park";
import Yggdrasill from "../models/Yggdrasill";

const Field = () => {
  const [selectedField, setSelectedField] = useState([]);
  const [islandScale, islandPosition] = adjustIslandForFieldSize();
  const [chessScale, chessPosition] = adjustChessForFieldSize();
  const [pizzaScale, pizzaPosition] = adjustPizzaForFieldSize();
  const [parkScale, parkPosition] = adjustParkForFieldSize();
  const [YggdrasillScale, YggdrasillPosition] = adjustYggdrasillForFieldSize();

  const CheckboxClick = (fieldName) => {
    if (selectedField.includes(fieldName)) {
      setSelectedField(selectedField.filter((field) => field !== fieldName));
    } else {
      setSelectedField([...selectedField, fieldName]);
    }
  };

  const isLinkVisible = selectedField.length === 1;

  console.log("selectedField[0]:", selectedField[0]);

  return (
    <section className="w-full h-screen overflow-hidden bg-white">
      <div className="w-full h-20"></div>
      <div className="grid grid-cols-3 gap-4 place-content-stretch h-">
        {/* 1つ目のセクション */}
        <div className="flex flex-col items-center justify-center mx-2 my-4">
          <div className="flex">
            <input
              type="checkbox"
              className="m-2"
              onChange={() => {
                CheckboxClick("Tropical Island");
              }}
            />
            <div className="m-2">Tropical Island</div>
          </div>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />

              <Island scale={islandScale} position={islandPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>

        {/* 2つ目のセクション */}
        <div className="flex flex-col items-center justify-center mx-2 my-4">
          <div className="flex">
            <input
              type="checkbox"
              className="m-2"
              onChange={() => {
                CheckboxClick("Chess");
              }}
            />
            <div className="m-2">Chess</div>
          </div>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />

              <Chess scale={chessScale} position={chessPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>

        {/* 3つ目のセクション */}
        <div className="flex flex-col items-center justify-center mx-2 my-4">
          <div className="flex">
            <input
              type="checkbox"
              className="m-2"
              onChange={() => {
                CheckboxClick("Pizza");
              }}
            />
            <div className="m-2">Pizza</div>
          </div>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />

              <Pizza scale={pizzaScale} position={pizzaPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        {/* 4つ目のセクション */}
        <div className="flex flex-col items-center justify-center mx-2 my-4">
          <div className="flex">
            <input
              type="checkbox"
              className="m-2"
              onChange={() => {
                CheckboxClick("Park");
              }}
            />
            <div className="m-2">Park</div>
          </div>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />

              <Park scale={parkScale} position={parkPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>

        {/* 5つ目のセクション */}
        <div className="flex flex-col items-center justify-center mx-2 my-4">
          <div className="flex">
            <input
              type="checkbox"
              className="m-2"
              onChange={() => CheckboxClick("Tree Island")}
            />
            <div className="m-2">Tree Island</div>
          </div>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />

              <Yggdrasill
                scale={YggdrasillScale}
                position={YggdrasillPosition}
              />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center">
        {isLinkVisible && (
          <div className="flex">
            <Link
              to={{
                pathname: "/editor",
              }}
              state={{ fieldName: selectedField[0] }}
            >
              Next Steps!
            </Link>
          </div>
        )}

        <hr />
      </div>
    </section>
  );
};

export default Field;

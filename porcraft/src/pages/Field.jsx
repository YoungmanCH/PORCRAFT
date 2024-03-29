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
  const [fieldPath, setFieldPath] = useState("");

  const [islandScale, islandPosition] = adjustIslandForFieldSize();
  const [chessScale, chessPosition] = adjustChessForFieldSize();
  const [pizzaScale, pizzaPosition] = adjustPizzaForFieldSize();
  const [parkScale, parkPosition] = adjustParkForFieldSize();
  const [YggdrasillScale, YggdrasillPosition] = adjustYggdrasillForFieldSize();

  const CheckboxClick = (fieldName, modelPath) => {
    if (selectedField.includes(fieldName)) {
      setSelectedField(selectedField.filter((field) => field !== fieldName));
    } else {
      setSelectedField([...selectedField, fieldName]);
      setFieldPath(modelPath);
    }
  };

  const isLinkVisible = selectedField.length === 1;

  return (
    <section className="w-full h-screen overflow-hidden bg-white">
      <p className="text-6xl font-serif mt-10 ml-14">
        Choose View Of The World
      </p>
      <div className="w-full h-20"></div>
      <div className="grid grid-cols-3 gap-4 place-content-stretch h-">
        {/* 1つ目のセクション */}
        <div className="flex flex-col items-center justify-center mx-2 my-4">
          <div className="flex">
            <input
              type="checkbox"
              className="m-2"
              onChange={() =>
                CheckboxClick(
                  "Tropical Island",
                  "/assets/3d/tropical_island.glb"
                )
              }
              checked={selectedField.includes("Tropical Island")}
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
              onChange={() => CheckboxClick("Chess", "/assets/3d/chess.glb")}
              checked={selectedField.includes("Chess")}
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
              onChange={() => CheckboxClick("Pizza", "/assets/3d/pizza.glb")}
              checked={selectedField.includes("Pizza")}
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
              onChange={() => CheckboxClick("Park", "/assets/3d/park.glb")}
              checked={selectedField.includes("Park")}
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
              onChange={() =>
                CheckboxClick("Tree Island", "/assets/3d/small_tree.glb")
              }
              checked={selectedField.includes("Tree Island")}
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
              className="btn rounded-xl mt-10 text-3xl"
              to={{
                pathname: "/editor ",
              }}
              state={{
                fieldName: selectedField[0],
                fieldPath: fieldPath,
              }}
            >
              Go To The Next Step !
            </Link>
          </div>
        )}

        <hr />
      </div>
    </section>
  );
};

export default Field;

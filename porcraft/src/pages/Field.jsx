/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */

import { Suspense, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Loader from "../components/Loader";

import adjustIslandForFieldSize from "../features/AdjustFieldSize/AdjustIslandForField";
import adjustChessForFieldSize from "../features/AdjustFieldSize/AdjustChessForField";
import adjustPizzaForFieldSize from "../features/AdjustFieldSize/AdjustPizzaForField";
import adjustParkForFieldSize from "../features/AdjustFieldSize/AdjustParkForField";
import adjustYggdrasillForFieldSize from "../features/AdjustFieldSize/AdjustYggdrasillForField";
import adjustWinterTerrainForFieldSize from "../features/AdjustFieldSize/AdjustWinterTerrainForField";
import adjustWinterAlienPlanetForFieldSize from "../features/AdjustFieldSize/AdjustAlienPlanetForField";

import UseField from "../features/UseField";

import UseDatabase from "../services/database/UseDatabase";

import Island from "../objects/Island";
import Chess from "../objects/Chess";
import Pizza from "../objects/Pizza";
import Park from "../objects/Park";
import Yggdrasill from "../objects/Yggdrasill";
import WinterTerrain from "../objects/WinterTerrain";
import AlienPlanet from "../objects/AlienPlanet";

const Field = () => {
  const [selectedField, setSelectedField] = useState([]);
  const [fieldPath, setFieldPath] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [islandScale, islandPosition] = adjustIslandForFieldSize();
  const [chessScale, chessPosition] = adjustChessForFieldSize();
  const [pizzaScale, pizzaPosition] = adjustPizzaForFieldSize();
  const [parkScale, parkPosition] = adjustParkForFieldSize();
  const [YggdrasillScale, YggdrasillPosition] = adjustYggdrasillForFieldSize();
  const [WinterTerrainScale, WinterTerrainPosition] =
    adjustWinterTerrainForFieldSize();
  const [AlienPlanetScale, AlienPlanetPosition] =
    adjustWinterAlienPlanetForFieldSize();

  const isLinkVisible = selectedField.length === 1;

  const [field, selectField, serializeField] = UseField();

  const { createWorldDatabase, fetchWorldDatabase } = UseDatabase({
    field,
    serializeField,
  });

  const CheckboxClick = (selectedFieldName, fieldPath) => {
    if (selectedField.includes(selectedFieldName)) {
      setSelectedField(
        selectedField.filter((fieldName) => fieldName !== selectedFieldName)
      );
    } else {
      setSelectedField([...selectedField, selectedFieldName]);
      setFieldPath(fieldPath);
    }
  };

  useEffect(() => {
    if (selectedField && fieldPath) {
      selectField(selectedField[0], fieldPath);
    }
  }, [selectedField, fieldPath]);

  const _handleCreateWorldDatabase = async () => {
    setLoading(true);
    const worldData = await createWorldDatabase(field);
    const userId = worldData[0];
    const worldId = worldData[1];
    await fetchWorldDatabase(userId, worldId);
    _handleNavigate(userId, worldId);
    setLoading(false);
  };

  const _handleNavigate = (userId, worldId) => {
    navigate("/editor", {
      state: {
        userId: userId,
        worldId: worldId,
        fieldName: selectedField[0],
        fieldPath: fieldPath,
      },
    });
  };

  return (
    <section className="w-full h-screen overflow-y-auto bg-gradient-to-r from-violet-950 via-indigo-900 to-blue-950 text-white">
      <p className="text-6xl font-sans font-bold mt-10 ml-14 text-center">
        Select view of the world
      </p>
      <div className="w-full h-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {/* 1つ目のセクション */}
        <div className="flex flex-col items-center justify-center mx-2 my-4 bg-slate-900 rounded-xl p-4 shadow-lg">
          <div className="flex items-center">
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
        <div className="flex flex-col items-center justify-center mx-2 my-4 bg-slate-900 rounded-xl p-4 shadow-lg">
          <div className="flex items-center">
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
        <div className="flex flex-col items-center justify-center mx-2 my-4 bg-slate-900 rounded-xl p-4 shadow-lg">
          <div className="flex items-center">
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
        <div className="flex flex-col items-center justify-center mx-2 my-4 bg-slate-900 rounded-xl p-4 shadow-lg">
          <div className="flex items-center">
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
        <div className="flex flex-col items-center justify-center mx-2 my-4 bg-slate-900 rounded-xl p-4 shadow-lg">
          <div className="flex items-center">
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

        {/* 6つ目のセクション */}
        <div className="flex flex-col items-center justify-center mx-2 my-4 bg-slate-900 rounded-xl p-4 shadow-lg">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="m-2"
              onChange={() =>
                CheckboxClick("Winter Terrain", "/assets/3d/winter_terrain.glb")
              }
              checked={selectedField.includes("Winter Terrain")}
            />
            <div className="m-2">Winter Terrain</div>
          </div>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />
              <WinterTerrain
                scale={WinterTerrainScale}
                position={WinterTerrainPosition}
              />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>

        {/* 7つ目のセクション */}
        <div className="flex flex-col items-center justify-center mx-2 my-4 bg-slate-900 rounded-xl p-4 shadow-lg">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="m-2"
              onChange={() =>
                CheckboxClick("Alien Planet", "/assets/3d/alien_planet.glb")
              }
              checked={selectedField.includes("Alien Planet")}
            />
            <div className="m-2">Alien Planet</div>
          </div>
          <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />
              <AlienPlanet
                scale={AlienPlanetScale}
                position={AlienPlanetPosition}
              />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      <div className="flex flex-col items-center mb-8">
        {isLinkVisible && (
          <div className="flex">
            <button
              className={`btn bg-blue-600 hover:bg-blue-700 text-white rounded-xl mt-10 text-3xl px-6 py-2 ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
              style={{
                background:
                  "linear-gradient(to right, #1d4ed8, #0284c7, #14b8a6)",
              }}
              onClick={_handleCreateWorldDatabase}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create new world!"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Field;

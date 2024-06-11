/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../services/auth/UseAuth";
import UseDatabase from "../services/database/UseDatabase";

const WorldLibrary = () => {
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [worlds, setWorlds] = useState([]);
  const navigate = useNavigate();
  const [getAuthenticatedUser] = UseAuth();
  const { fetchAllWorldDatabaseWithUserId } = UseDatabase({});

  useEffect(() => {
    _handleFetchAllWorld();
  }, []);

  const _handleFetchAllWorld = useCallback(async () => {
    try {
      const userId = await _handleFetchUserId();
      const worldsData = await fetchAllWorldDatabaseWithUserId(userId);

      const extractedWorldsData = _getWorldDataToMap(worldsData);
      setWorlds(extractedWorldsData);
    } catch (error) {
      console.error("Error fetching worlds:", error);
    }
  }, []);

  const _handleFetchUserId = async () => {
    const user = await getAuthenticatedUser();
    return user.username;
  };

  const _getWorldDataToMap = (worldsData) => {
    return worldsData.map((world) => ({
      worldId: world.worldId.S,
      userId: world.userId.S,
      worldName: world.worldName?.S,
      field: world.field?.S,
      updatedAt: world.updatedAt?.S,
      createdAt: world.createdAt?.S,
      objects: world.objects ? JSON.parse(world.objects.S) : null,
    }));
  };

  const handleCheckboxChange = (worldData) => {
    setSelectedWorld(worldData);
  };

  const handleEditWorld = () => {
    const selectedField = JSON.parse(selectedWorld.field);
    if (selectedWorld !== null) {
      navigate("/editor", {
        state: {
          receiveObjects: selectedWorld.objects,
          userId: selectedWorld.userId,
          worldId: selectedWorld.worldId,
          fieldName: selectedField.name,
          fieldPath: selectedField.path,
        },
      });
    }
  };

  return (
    <section className="w-full h-screen bg-gradient-to-r from-purple-800 via-indigo-600 to-purple-500 text-white flex flex-col items-center font-sans">
      <h1 className="text-6xl font-bold my-8">My World Repository</h1>
      <div className="flex-1 w-full overflow-auto">
        <div className="w-full max-w-4xl px-6 mx-auto">
          {worlds.map((world) => (
            <div
              key={world.worldId}
              className="flex items-center justify-between bg-gray-800 rounded-xl p-4 mb-4 shadow-lg border border-gray-700"
            >
              <input
                type="checkbox"
                checked={selectedWorld === world}
                onChange={() => handleCheckboxChange(world)}
                className="mr-4"
              />
              <a
                href={`/preview/${world.worldId}`}
                className="text-xl text-blue-400 hover:underline"
              >
                {`${world.worldId}`}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        {selectedWorld !== null && (
          <button
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white rounded-xl text-xl px-6 py-2"
            onClick={handleEditWorld}
          >
            Edit World
          </button>
        )}
      </div>
    </section>
  );
};

export default WorldLibrary;

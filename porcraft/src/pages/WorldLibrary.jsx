import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../services/auth/UseAuth";
import UseDatabase from "../services/database/UseDatabase";

const WorldLibrary = () => {
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [worlds, setWorlds] = useState([]);
  const navigate = useNavigate();
  const [handleToGetCurrentUser] = UseAuth();
  const { fetchAllWorldDatabaseWithUserId } = UseDatabase({});

  const _handleFetchAllWorld = useCallback(async () => {
    const userId = await _handleFetchUserId();
    console.log('userId:', userId);
    const worldsData = await fetchAllWorldDatabaseWithUserId(userId);
    console.log('worldsData:', worldsData);
    setWorlds(worldsData);
  }, [fetchAllWorldDatabaseWithUserId]);

  const _handleFetchUserId = async () => {
    const user = await handleToGetCurrentUser();
    return user.userId;
  };

  useEffect(() => {
    _handleFetchAllWorld();
  }, [_handleFetchAllWorld]);

  const handleCheckboxChange = (id) => {
    setSelectedWorld(id);
  };

  const handleEditWorld = () => {
    if (selectedWorld !== null) {
      navigate(`/preview/${selectedWorld.id}`);
    }
  };

  return (
    <section className="w-full h-screen bg-gradient-to-r from-purple-800 via-indigo-600 to-purple-500 text-white flex flex-col items-center justify-center font-sans">
      <h1 className="text-6xl font-bold mb-16">My World Repository</h1>
      <div className="w-full max-w-4xl px-6">
        {worlds.map((world) => (
          <div
            key={world.id}
            className="flex items-center justify-between bg-gray-800 rounded-xl p-4 mb-4 shadow-lg border border-gray-700"
          >
            <input
              type="checkbox"
              checked={selectedWorld === world.id}
              onChange={() => handleCheckboxChange(world.id)}
              className="mr-4"
            />
            <a
              href={world.link}
              className="text-xl text-blue-400 hover:underline"
            >
              {world.name}
            </a>
          </div>
        ))}
      </div>
      {selectedWorld !== null && (
        <button
          className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white rounded-xl mt-10 text-xl px-6 py-2"
          onClick={handleEditWorld}
        >
          Edit World
        </button>
      )}
    </section>
  );
};

export default WorldLibrary;

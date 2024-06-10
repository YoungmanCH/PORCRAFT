import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Mode = () => {
  const navigate = useNavigate();
  const [mode, selectMode] = useState(null);

  const ModeType = useMemo(() => ({
    EDIT: "edit",
    CREATE: "create",
  }), []);

  useEffect(() => {
    if (mode === ModeType.EDIT) {
      navigate("/worldLibrary");
    } else if (mode === ModeType.CREATE) {
      navigate("/field");
    }
  }, [mode, navigate, ModeType]);

  const _handleSelectMode = (selectedMode) => {
    selectMode(selectedMode);
  };

  return (
    <section className="w-full h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white flex items-center justify-center font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-6">
        {/* Edit Existing World Section */}
        <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Edit Existing World</h2>
          <p className="mb-4">
            Modify your existing worlds with new features and updates.
          </p>
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl mt-4 text-xl px-6 py-2"
            onClick={() => _handleSelectMode(ModeType.EDIT)}
          >
            Edit World
          </button>
        </div>

        {/* Create New World Section */}
        <div className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Create New World</h2>
          <p className="mb-4">
            Start a new adventure by creating a new world from scratch.
          </p>
          <button
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white rounded-xl mt-4 text-xl px-6 py-2"
            onClick={() => _handleSelectMode(ModeType.CREATE)}
          >
            Create World
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mode;

/* eslint-disable react/prop-types */

import { useState } from "react";
import UseDatabase from "../../services/database/UseDatabase";

const ExportButton = ({
  userId,
  worldId,
  objects,
  field,
  serializeObjects,
  serializeField,
}) => {
  const { updateWorldDatabase } = UseDatabase({
    objects,
    field,
    serializeObjects,
    serializeField,
  });

  const [loading, setLoading] = useState(false);

  const _handleUpdateWorldDatabase = async () => {
    setLoading(true);
    try {
      await updateWorldDatabase(userId, worldId);
      const newUrl = `/preview/${worldId}`;
      window.open(newUrl, "_blank");
    } catch (error) {
      console.error("Error updating world database:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`fixed bottom-3 right-3 left-3 lg:bottom-6 lg:right-6 lg:left-auto z-10 text-zinc-400 bg-neutral-800 rounded-md px-4 py-2 text-center ${
        loading ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={_handleUpdateWorldDatabase}
      disabled={loading}
    >
      {loading ? "Loading..." : "Export"}
    </button>
  );
};

export default ExportButton;

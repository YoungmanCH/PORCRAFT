/* eslint-disable react/prop-types */

import { useState } from "react";
import UseDatabase from "../../services/database/UseDatabase";

const ExportButton = ({ userId, worldId, objects, field, serializeObjects, serializeField }) => {
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
      window.open(newUrl, '_blank');
    } catch (error) {
      console.error("Error updating world database:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`absolute bottom-3 right-3 trans-btn z-10 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
      onClick={_handleUpdateWorldDatabase}
      disabled={loading}
    >
      {loading ? "Loading..." : "Export"}
    </button>
  );
};

export default ExportButton;


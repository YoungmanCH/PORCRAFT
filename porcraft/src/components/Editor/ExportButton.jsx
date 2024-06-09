/* eslint-disable react/prop-types */
import UseDatabase from "../../services/database/UseDatabase";

const ExportButton = ({ objects, field, serializeObjects, serializeField }) => {
  const { createWorldDatabase, updateWorldDatabase, fetchUserDatabase } = UseDatabase({
    objects,
    field,
    serializeObjects,
    serializeField,
  });

  const _handleCreateWorldDatabase = async () => {
    await createWorldDatabase();
  }

  const _handleUpdateWorldDatabase = async () => {
    await updateWorldDatabase();
  };

  const _handleFetchUserDatabase = async () => {
    await fetchUserDatabase();
  }

  return (
    <button
      className="absolute bottom-3 right-3 trans-btn z-10"
      // onClick={_handleUpdateWorldDatabase}
      // onClick={_handleFetchUserDatabase}
      onClick={_handleCreateWorldDatabase}
    >
      Export
    </button>
  );
};

export default ExportButton;

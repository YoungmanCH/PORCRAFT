/* eslint-disable react/prop-types */

import UseDatabase from "../../services/database/UseDatabase";

const ExportButton = ({ id, objects, field, serializeObjects, serializeField }) => {
  const { updateWorldDatabase } = UseDatabase({
    objects,
    field,
    serializeObjects,
    serializeField,
  });

  const _handleUpdateWorldDatabase = async () => {
    await updateWorldDatabase(id);
    const newUrl = `/preview/${id}`;
    window.open(newUrl, '_blank');
  };

  return (
    <button
      className="absolute bottom-3 right-3 trans-btn z-10"
      onClick={_handleUpdateWorldDatabase}
    >
      Export
    </button>
  );
};

export default ExportButton;

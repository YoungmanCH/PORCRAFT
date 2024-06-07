/* eslint-disable react/prop-types */
import UseDatabase from "../../services/database/UseDatabase";

const ExportButton = ({ objects, field, serializeObjects, serializeField }) => {
  const exportDatabase = UseDatabase({
    objects,
    field,
    serializeObjects,
    serializeField
  });

  const _handleExportDatabase = async () => {
    await exportDatabase();
  };

  return (
    <button
      className="absolute bottom-3 right-3 trans-btn z-10"
      onClick={_handleExportDatabase}
    >
      Export
    </button>
  );
};

export default ExportButton;

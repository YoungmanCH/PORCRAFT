/* eslint-disable react/prop-types */
import UseDatabase from "../../services/database/UseDatabase";

const ExportButton = ({ objects, field, serializeObjects, serializeField }) => {
  const { createUserDatabase, exportDatabase } = UseDatabase({
    objects,
    field,
    serializeObjects,
    serializeField,
  });

  const _handleExportDatabase = async () => {
    await exportDatabase();
  };

  // const _handleCreateUserDatabase = async () => {
  //   await createUserDatabase();
  // };

  return (
    <button
      className="absolute bottom-3 right-3 trans-btn z-10"
      // onClick={_handleCreateUserDatabase}
      onClick={_handleExportDatabase}
    >
      Export
    </button>
  );
};

export default ExportButton;

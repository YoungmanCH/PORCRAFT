/* eslint-disable react/prop-types */

const ExportButton = ({ objects, serializeObjects }) => {
  const handleExport = () => {
    // 使用例
    const serializedData = serializeObjects(objects);

    // Blob Rest API
    const blob = new Blob([serializedData], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "scene.json";
    link.click();
    URL.revokeObjectURL(url);

    objects.forEach((obj) => {
      if (obj.modelPath && obj.name) {
        downloadModel(obj.modelPath, `${obj.name}.glb`);
      }
    });
  };

  const downloadModel = async (url, filename) => {
    const response = await fetch(url);
    const data = await response.blob();
    const blobUrl = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <button className="absolute top-0 left-28 btn z-10" onClick={handleExport}>
      Export
    </button>
  );
};

export default ExportButton;

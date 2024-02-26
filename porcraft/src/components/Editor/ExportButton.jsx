/* eslint-disable react/prop-types */

const ExportButton = ({ objects, serializeObjects }) => {
  const handleExport = async () => {
    const serializedData = serializeObjects(objects);

    const jsonData = JSON.stringify(serializedData);

    // データをデータベースに保存するためのAPIエンドポイント
    const exportApiEndpoint =
      "https://y9x82tppo0.execute-api.ap-northeast-1.amazonaws.com/prod/export";

    try {
      const response = await fetch(exportApiEndpoint, {
        method: "POST",
        body: jsonData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("response:", { response });

      const responseData = await response.json();
      console.log("responseData:", responseData);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button className="absolute bottom-3 right-3 trans-btn z-10" onClick={handleExport}>
      Export
    </button>
  );
};

export default ExportButton;

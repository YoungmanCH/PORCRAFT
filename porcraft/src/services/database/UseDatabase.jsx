const UseDatabase = ({ objects, field, serializeObjects, serializeField }) => {
  const exportDatabase = async () => {
    const serializedObjects = serializeObjects(objects);
    const serializedField = serializeField(field);

    const jsonData = JSON.stringify({
      objects: serializedObjects,
      field: serializedField,
    });

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

  return exportDatabase;
};

export default UseDatabase;

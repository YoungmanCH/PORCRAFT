/* eslint-disable react/prop-types */
const ExportButton = ({ objects, serializeObjects }) => {
  const handleExport = async () => {
    const serializedData = serializeObjects(objects);

    console.log('serializedData:', serializedData);

    const apiEndpoint = "https://y9x82tppo0.execute-api.ap-northeast-1.amazonaws.com/prod/export";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: serializedData, // 直接serializedDataを使用
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log('response:', {response})

      const responseData = await response.json();
      console.log('responseData:', responseData); // 確認用
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button className="absolute top-0 left-28 btn z-10" onClick={handleExport}>Export</button>
  );
};

export default ExportButton;

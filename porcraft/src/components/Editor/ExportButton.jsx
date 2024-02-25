/* eslint-disable react/prop-types */
const ExportButton = ({ objects, serializeObjects }) => {
  const handleExport = async () => {
    const serializedData = serializeObjects(objects);

    const jsonData = JSON.stringify(serializedData);

    // データをデータベースに保存するためのAPIエンドポイント
    const exportApiEndpoint =
      "https://y9x82tppo0.execute-api.ap-northeast-1.amazonaws.com/prod/export";

    // データベースからデータを取得するためのAPIエンドポイント
    // const getEndpoint =
    //   "https://y9x82tppo0.execute-api.ap-northeast-1.amazonaws.com/prod/get";

    try {
      const response = await fetch(exportApiEndpoint, {
        method: "POST",
        body: jsonData, // 直接serializedDataを使用
        // body: serializedData, // 直接serializedDataを使用
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

      // // 保存されたデータを取得
      // const fetchResponse = await fetch(getEndpoint, {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      // if (!fetchResponse.ok) {
      //   throw new Error("Network response was not ok");
      // }

      // const fetchedData = await fetchResponse.json();
      // console.log("Fetched data:", fetchedData);

      // const bodyData = fetchedData.body;
      // console.log("Parsed body data:", bodyData);


      // bodyDataを使って何か処理を行う
      // bodyData.map((item, index) => {
      //   console.log(`Item ${index}:`, item);
      //   // ここで各アイテムの詳細な処理を行う
      // });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button className="absolute top-0 left-28 btn z-10" onClick={handleExport}>
      Export
    </button>
  );
};

export default ExportButton;

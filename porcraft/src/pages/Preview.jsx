/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OrbitControls } from "@react-three/drei";

import FieldComponents from "../components/Editor/FieldComponents";
import Loader from "../components/Loader";
import ObjectComponents from "../components/ObjectComponents";
import Popup from "../components/Popup";

const fetchObjectsData = async (key) => {
  const getEndpoint = `https://y9x82tppo0.execute-api.ap-northeast-1.amazonaws.com/prod/get?key=json`;
  // const getEndpoint = `https://y9x82tppo0.execute-api.ap-northeast-1.amazonaws.com/prod/get?key=${key}`;

  // 保存されたデータを取得
  const fetchResponse = await fetch(getEndpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!fetchResponse.ok) {
    throw new Error("Network response was not ok");
  }

  const fetchedData = await fetchResponse.json();

  // JSON文字列をオブジェクトに変換
  const objects = fetchedData.objects ? JSON.parse(fetchedData.objects) : [];
  const field = fetchedData.field ? JSON.parse(fetchedData.field) : null;

  return { objects, field };
};

const Preview = () => {
  const [objData, setObjectData] = useState({ objects: [], field: null });
  const [searchParams, setSearchParams] = useSearchParams();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupContent, setPopupContent] = useState("");

  useEffect(() => {
    const key = searchParams.get("key");
    fetchObjectsData(key).then(setObjectData);
  }, [objData, searchParams, setSearchParams, setObjectData]);

  const handleObjectClick = (object) => {
    setPopupTitle(object.popupTitle);
    setPopupContent(object.popupContent);
    setIsPopupVisible((prev) => !prev);
    console.log('popupTitle:', object.popupTitle, 'popupContent:', popupContent)
  };

  return (
    <section className="w-full h-screen flex overflow-hidden">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <FieldComponents field={objData.field} />

        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          {objData.objects.map((obj) => (
            <ObjectComponents
              key={obj.id}
              setScale={obj.setScale}
              onClick={() => handleObjectClick(obj)}
              {...obj}
            />
          ))}
        </Suspense>
        <OrbitControls />
      </Canvas>

      {/* ポップアップコンポーネント */}
      {isPopupVisible && (
        <Popup
          isVisible={isPopupVisible}
          setIsVisible={setIsPopupVisible}
          title={popupTitle}
          content={popupContent}
        />
      )}
    </section>
  );
};

export default Preview;

/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
// import Island from "../models/Island";
import ObjectComponents from "../components/ObjectComponents";
import Loader from "../components/Loader";
import { useSearchParams } from "react-router-dom";

const fetchObjectsData = async (key) => {
  const getEndpoint = `https://y9x82tppo0.execute-api.ap-northeast-1.amazonaws.com/prod/get?key=${key}`;

  // 保存されたデータを取得
  const fetchResponse = await fetch(getEndpoint, {
    method: "GET",
  });
  console.log('fetchResponse:',  fetchResponse.status);

  if (!fetchResponse.ok) {
    throw new Error("Network response was not ok");
  }

  const fetchedData = await fetchResponse.json();
  console.log("Fetched data:", fetchedData);

  const bodyData = fetchedData;
  // lambdaにはbodyData[0]は愚策。
  console.log("Parsed body data:", {data: Object.values(bodyData[0])});
  const number = Object.values(bodyData);
  return Object.values(bodyData).slice(0, number.length-1);
};

const Preview = () => {
  const [objData, setObjectData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const key = searchParams.get('key');
    fetchObjectsData(key).then(setObjectData);
  }, [searchParams, setSearchParams, setObjectData]);

  return (
    <section className="w-full h-screen flex overflow-hidden">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          {/* <Island
          scale={islandScale}
          position={islandPosition}
          rotation={islandRotation}
        /> */}

          {/* 後でnull check */}
          {objData.map((obj) => (
          <ObjectComponents key={obj.id} setScale={obj.setScale} {...obj} />
        ))}
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Preview;

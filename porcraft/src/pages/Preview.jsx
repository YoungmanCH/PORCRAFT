/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OrbitControls } from "@react-three/drei";

import FieldComponents from "../components/Editor/FieldComponents";
import Loader from "../components/Loader";
import ObjectComponents from "../components/ObjectComponents";
import Popup from "../components/Popup";
import UseAuth from "../services/auth/UseAuth";
import UseDatabase from "../services/database/UseDatabase";

const Preview = () => {
  const [objData, setObjectData] = useState({ objects: [], field: null });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupContent, setPopupContent] = useState("");
  const { worldId } = useParams();

  const [handleToGetCurrentUser] = UseAuth();
  const { fetchWorldDatabase } = UseDatabase({
    objects: objData.objects,
    field: objData.field,
  });

  useEffect(() => {
    const _handleFetchWorldDatabase = async () => {
      try {
        const userId = await _handleFetchUserId();
        const data = await fetchWorldDatabase(userId, worldId);
        if (data) {
          setObjectData({
            objects: data.objects ? JSON.parse(data.objects.S) : [],
            field: data.field ? JSON.parse(data.field.S) : null,
          });
        }
      } catch (error) {
        console.error("Error fetching world data:", error);
      }
    };

    if (worldId) {
      _handleFetchWorldDatabase();
    }
  }, [worldId]);

  const _handleFetchUserId = async () => {
    const user = await handleToGetCurrentUser();
    return user.userId;
  };

  const handleObjectClick = (object) => {
    setPopupTitle(object.popupTitle);
    setPopupContent(object.popupContent);
    setIsPopupVisible((prev) => !prev);
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

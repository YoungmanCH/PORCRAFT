/* eslint-disable react-hooks/exhaustive-deps */

import { useState,useEffect } from "react";

const Help = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images=[
    "./src/images/land1.png",
     "./src/images/colorful.jpg",
     "./src/images/future.jpg"
    ];
    const calculateBGPosition = (index)=>{
      return `${index+100}% 50%`;
    }

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentImage((prevImage)=>(prevImage+1) % images.length);
    },2000);

    return() => clearInterval(interval);
  },[]);

  return (
    <section className="w-full h-screen relative">
  {/* スライドショー部分 */}
  <div
    style={{
      width: "100%",
      height: "56.25vw",
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${images[currentImage]})`,
      backgroundSize: "cover",
      backgroundPosition: calculateBGPosition(currentImage),
      transition: "background-position 1s ease-in-out",
    }}
  >
    <div className="flex items-center justify-center h-full ">
      <div className="start ml-20">
        <h1 className="text-3xl font-serif ">好きな世界観を選び、オブジェクトを配置。
          3Dポートフォリオを作成しましょう。

        </h1>
      </div>
    </div>
  </div>
</section>

  );
};

export default Help
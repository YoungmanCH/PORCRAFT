/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images=[
    "./public/images/land1.png",
     "./public/images/colorful.jpg",
     "./public/images/future.jpg"
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
    <section className="w-full h-screen relative"
    style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url(${images[currentImage]})`,
      backgroundSize:"cover",
      backgroundPosition:calculateBGPosition(currentImage),
      transition: "background-position 1s ease-in-out",
    }}>
      <div
        className="absolute top-56 left-0 right-0 flex 
      items-center justify-center"
      >
        <div className="start">
          <p className="start-text">
            Create your own portfolio with 3D objects!{" "}
          </p>
          <div className="flex">
          <Link to="/editor" className="btn pading-all-20px">
            Get started!
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

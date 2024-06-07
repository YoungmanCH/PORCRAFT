/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../services/auth/UseAuth";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentUser, setUser] = useState();
  const navigate = useNavigate();
  const [handleToGetCurrentUser] = UseAuth();

  const images = [
    "./src/images/land1.png",
    "./src/images/colorful.jpg",
    "./src/images/future.jpg",
  ];
  const calculateBGPosition = (index) => {
    return `${index + 100}% 50%`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    _handleToGetCurrentUser();
  }, []);

  const _handleToGetCurrentUser = async () => {
    const user = await handleToGetCurrentUser();
    setUser(user);
  };

  const handleNavigate = () => {
    if (currentUser == null) {
      navigate("/signUp");
    } else {
      navigate("/field");
    }
  };

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
            <h1 className="text-7xl font-serif tracking-wider">PORCRAFT</h1>
            <p className="start-text ml-10 font-thin font-sans">
              Create your own portfolio<br></br>
              with 3D objects!
            </p>
            <div className="flex">
              <div
                onClick={handleNavigate}
                className="btn pading-all-20px text-3xl rounded-3xl"
              >
                Get started !
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

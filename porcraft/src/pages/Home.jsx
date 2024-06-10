/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../services/auth/UseAuth";

const Home = () => {
  const [currentUser, setUser] = useState();
  const navigate = useNavigate();
  const [handleToGetCurrentUser] = UseAuth();

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
      navigate("/mode");
    }
  };

  return (
    <section className="w-full h-screen relative">
      {/* スライドショー部分 */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          backgroundImage: `url("assets/images/planet-astronaut.jpg")`,
          backgroundSize: "cover",
          transition: "background-position 1s ease-in-out",
        }}
      >
        <div className="flex items-center justify-center h-full ">
          <div className="start ml-20">
            <h1
              className="text-7xl font-serif tracking-wider"
              style={{
                background:
                  "linear-gradient(to right, #0ea5e9, #5eead4, #ebf8e1, white)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PORCRAFT
            </h1>
            <p className="ml-10 font-medium font-sans text-2xl text-teal-400">
              Create your own portfolio<br></br>
              with 3D objects!
            </p>
            <div className="flex">
              <div
                onClick={handleNavigate}
                className="btn pading-all-20px text-3xl rounded-3xl"
                style={{
                  background: "linear-gradient(to right, #1d4ed8, #0284c7, #5eead4)",
                }}
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

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../services/auth/UseAuth";
import "../components/css/Home.css";

const Home = () => {
  const [currentUser, setUser] = useState();
  const navigate = useNavigate();
  const [getAuthenticatedUser] = UseAuth();

  useEffect(() => {
    _handleToGetAuthenticatedUser();
  }, []);

  const _handleToGetAuthenticatedUser = async () => {
    const user = await getAuthenticatedUser();
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
    <section className="home-container">
      <div className="home-background">
        <div className="home-content">
          <div className="home-start">
            <h1 className="home-title">PORCRAFT</h1>
            <p className="home-description">
              Create your own portfolio<br></br>
              with 3D objects!
            </p>
            <div className="home-button-container">
              <div onClick={handleNavigate} className="home-button">
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

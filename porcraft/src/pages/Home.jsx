/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <div
        className="absolute top-56 left-0 right-0 flex 
      items-center justify-center"
      >
        <div className="start">
          <p className="start-text">
            Create your own portfolio with 3D objects!{" "}
          </p>
          <Link to="/editor" className="btn">
            Get started!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

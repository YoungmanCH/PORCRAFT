/* eslint-disable react/prop-types */

import React from "react";
import "../components/css/Popup.css";

const Popup = ({ isVisible, setIsVisible, title, content }) => {
  if (!isVisible) {
    return null;
  }

  const parseContent = (text) => {
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line.split(linkRegex).map((part, i) =>
          linkRegex.test(part) ? (
            <div key={i} className="my-1">
              <a href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {part}
              </a>
            </div>
          ) : (
            <div key={i} className="my-1">
              {part}
            </div>
          )
        )}
        <br key={`br-${index}`} />
      </React.Fragment>
    ));
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      className="modal-container"
    >
      <button
        className="text-black self-end pt-5 pr-5"
        onClick={() => setIsVisible(false)}
      >
        ✕
      </button>
      <div className="flex justify-center mt-10">
        <h2 className="text-4xl font-serif tracking-wider">{title}</h2>
      </div>
      <div
        className="flex flex-col justify-center overflow-auto text-xl pt-20 px-10"
        style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
      >
        {parseContent(content)}
      </div>
    </div>
  );
};

export default Popup;

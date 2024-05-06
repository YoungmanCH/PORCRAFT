/* eslint-disable react/prop-types */

import React from "react";

const Popup = ({ isVisible, setIsVisible, title, content }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed", // 画面に対して固定位置
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // 中央に配置
        width: "60vw", // 幅をビューポートの75%に
        height: "60vh", // 高さをビューポートの75%に
        backgroundColor: "white",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column", // 中央に寄せる
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
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
      <div className="flex justify-center overflow-auto text-xl pt-20">
        {content.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>

    </div>
  );
};

export default Popup;

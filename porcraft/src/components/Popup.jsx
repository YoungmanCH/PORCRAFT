import React from "react";
import { useState } from "react";

const Popup = ({ isVisible, setIsVisible }) => {
  console.log('hello');
  console.log('isVisible:', isVisible)
  
  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-background">
      <div className="popup-content">
        <h2>ポップアップの内容</h2>
        <p>ここにポップアップの内容が入ります。</p>
        <button onClick={() => setIsVisible(false)}>閉じる</button>
      </div>
    </div>
  );
};

export default Popup;



// const Popup = ({ setIsPopupVisible }) => {
//   console.log('hello');
//   console.log('setIsPopupVisible:', setIsPopupVisible);

//   return (
//     <section
//       style={{
//         width: "90vw",
//         height: "90vh",
//         backgroundColor: "white",
//         position: "fixed",
//         top: "5vh",
//         left: "5vw",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: "20px",
//         zIndex: 1000, // ポップアップが他の要素より前面に来るように
//       }}
//     >
//       <button
//         onClick={setIsPopupVisible(false)}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           borderRadius: "0 0 5px 0", // ボタンの右下の角を丸くする
//         }}
//       >
//         X
//       </button>

//       <h3>hhh</h3>
//       {/* ここにポップアップの内容を追加 */}
//     </section>
//   );
// };

// export default Popup;

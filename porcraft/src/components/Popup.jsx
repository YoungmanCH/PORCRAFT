import React, { useState } from 'react';


const Popup = ({ isVisible, setIsVisible }) => {
  console.log('isVisible:', isVisible)
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('Title');
  const [content, setContent] = useState('contents');

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed', // 画面に対して固定位置
      top: '50%', // 上から50%の位置
      left: '50%', // 左から50%の位置
      transform: 'translate(-50%, -50%)', // 中央に配置
      width: '60vw', // 幅をビューポートの75%に
      height: '60vh', // 高さをビューポートの75%に
      backgroundColor: 'white', // 背景色
      zIndex: 1000, // 他の要素より前面に表示
      display: 'flex', // Flexboxを使用して中身を整列
      flexDirection: 'column', // 中央に寄せる
      alignItems: 'center', // 中央に寄せる
      borderRadius: '20px', // 角を丸くする
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 影をつける
    }}>
      <div className="flex flex-nowrap mb-20">
        <button className="absolute top-5 left-5"
          onClick={() => setIsEditing(!isEditing)}>
          Edit/View
        </button>
        {isEditing ? (

          <input value={title} className="text-5xl font-serif tracking-wider text-center" onChange={(e) => setTitle(e.target.value)} type='text' />

        ) : (
          <h2 style={{ marginTop: 10 }} className="text-5xl font-serif tracking-wider">Title</h2>

        )
        }



      </div>
      {isEditing ? (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className=' flex flex-1 p-10 mb-20 text-center'
          />
        ) : (
          <div className='flex flex-1 overflow px-20 mb-20 text-center'>
            {content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        )}
      <button style={{ marginBottom: '20px' }}
        onClick={() => setIsVisible(false)}>close</button>
    </div>
  );
};

export default Popup;

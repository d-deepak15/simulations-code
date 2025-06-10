import React from 'react';

const ClickableResistor = ({ width = 200, height = 100, style, onStartDrag, ...props }) => {
  const handleClick = (part) => (e) => {
    e.stopPropagation();
    alert(`${part} clicked!`);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 120 320"
      style={style}
      pointerEvents="visiblePainted"
      {...props}
    >
      {/* Top Wire - Draggable */}
      <rect
        x="55" y="0" width="10" height="40"
        fill="#777" rx="5" ry="5"
        style={{ cursor: 'grab' }}
        onMouseDown={onStartDrag}
        onClick={handleClick('Top wire')}
      />

      {/* Resistor Body - Draggable */}
      <path
        d="M60,40 C40,50 30,70 30,100 C30,130 35,160 30,190 C30,220 40,250 60,260 C80,250 90,220 90,190 C85,160 90,130 90,100 C90,70 80,50 60,40 Z"
        fill="#d2b48c" stroke="#a08362" strokeWidth="2"
        style={{ cursor: 'grab' }}
        onMouseDown={onStartDrag}
        onClick={handleClick('Resistor body')}
      />

      {/* Color Bands - Clickable but Not Draggable */}
      <rect x="31" y="80" width="58" height="10" fill="saddlebrown"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Band 1 (Brown)')}
      />
      <rect x="30" y="95" width="60" height="10" fill="black"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Band 2 (Black)')}
      />
      <rect x="30" y="120" width="60" height="10" fill="red"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Band 3 (Red)')}
      />
      <rect x="31" y="145" width="59" height="10" fill="gold"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Band 4 (Gold)')}
      />

      {/* Bottom Wire - Draggable */}
      <rect
        x="55" y="260" width="10" height="40"
        fill="#777" rx="5" ry="5"
        style={{ cursor: 'grab' }}
        onMouseDown={onStartDrag}
        onClick={handleClick('Bottom wire')}
      />
    </svg>
  );
};

export default ClickableResistor;

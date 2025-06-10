import React from 'react';

const ClickableLED = ({
  width = 120,
  height = 150,
  style,
  onStartDrag,
  ...props
}) => {
  const handleClick = (part) => (e) => {
    e.stopPropagation();
    alert(`${part} clicked!`);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 120 150"
      style={style}
      {...props}
    >
      {/* LED dome - clickable and draggable */}
      <path
        d="M40,30 a20,30 0 0,1 40,0 v40 h-40 v-40 z"
        fill="#b30000"
        style={{ cursor: 'grab' }}
        onMouseDown={onStartDrag}
        onClick={handleClick('LED dome')}
      />

      {/* Base ring - clickable */}
      <ellipse
        cx="60"
        cy="70"
        rx="22"
        ry="6"
        fill="#800000"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Base ring')}
      />

      {/* Anode leg (left, straight) - clickable and draggable */}
      <rect
        x="50"
        y="75"
        width="4"
        height="50"
        rx="1.5"
        fill="#777"
        style={{ cursor: 'grab' }}
        onMouseDown={onStartDrag}
        onClick={handleClick('Anode leg')}
      />

      {/* Cathode leg (right, bent) - clickable and draggable */}
      <path
        d="M66,75 v15 q0,5 6,10 t6,25"
        fill="none"
        stroke="#777"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ cursor: 'grab' }}
        onMouseDown={onStartDrag}
        onClick={handleClick('Cathode leg')}
      />

      {/* Shine - clickable */}
      <path
        d="M48,35 a8,12 0 0,1 10,0"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Shine')}
      />
    </svg>
  );
};

export default ClickableLED;
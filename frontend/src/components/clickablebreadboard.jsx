import React from 'react';

export default function ClickableBreadboard({ width = 300, height = 100, style, onStartDrag, ...props }) {
  const handleClick = (part) => (e) => {
    e.stopPropagation();
    alert(`${part} clicked!`);
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 300 100" style={style} pointerEvents="visiblePainted" {...props}>
      {/* Breadboard body */}
      <rect x="10" y="10" width="280" height="80" rx="16" fill="#eee"
        style={{ cursor: 'grab' }}
        onMouseDown={onStartDrag}
        onClick={handleClick('Breadboard body')}
      />
      {/* Power rail */}
      <rect x="15" y="15" width="270" height="10" fill="#f88"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Power rail')}
      />
      {/* Ground rail */}
      <rect x="15" y="75" width="270" height="10" fill="#88f"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Ground rail')}
      />
    </svg>
  );
}

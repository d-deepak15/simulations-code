import React from 'react';

const ClickableLCD = ({
  width = "80mm",
  height = "36mm",
  style,
  onStartDrag,
  ...props
}) => {
  // Helper for click events
  const handleClick = (part) => (e) => {
    e.stopPropagation();
    alert(`${part} clicked!`);
  };

  return (
    <svg
      version="1.1"
      style={{ fontSize: "1.5px", fontFamily: "monospace", ...style }}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 80 36"
      {...props}
    >
      <defs>
        <pattern id="characters" width="3.55" height="5.95" patternUnits="userSpaceOnUse" x="12.45" y="12.55">
          <rect width="2.95" height="5.55" fillOpacity="0.05" />
        </pattern>
        <pattern id="pins" width="2.54" height="3.255" patternUnits="userSpaceOnUse" y="1.1">
          <path fill="#92926d" d="M0,0.55c0,0 0.21,-0.52 0.87,-0.52 0.67,0 0.81,0.51 0.81,0.51v1.81h-1.869z" />
          <circle r="0.45" cx="0.827" cy="0.9" color="black" />
        </pattern>
      </defs>

      {/* LCD Main Body (Draggable) */}
      <rect
        fill="#087f45"
        width="80"
        height="36"
        style={{ cursor: 'grab' }}
        onMouseDown={onStartDrag}
        onClick={handleClick('LCD main body')}
      />

      {/* LCD Border */}
      <rect
        x="4.95"
        y="5.7"
        width="71.2"
        height="25.2"
        fill="#222"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('LCD border')}
      />

      {/* LCD Display Area */}
      <rect
        x="7.55"
        y="10.3"
        rx="1.5"
        ry="1.5"
        width="66"
        height="16"
        fill="#6cb201"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('LCD display area')}
      />

      {/* Transparent overlay for display area (optional, for click) */}
      <rect
        x="7.55"
        y="10.3"
        rx="1.5"
        ry="1.5"
        width="66"
        height="16"
        opacity="0"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('LCD display area')}
      />

      {/* I2C Pins (Clickable) */}
      <rect
        x="7.55"
        y="-2.5"
        height="2.5"
        width="10.16"
        fill="url(#pins)"
        transform="rotate(90)"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('I2C pins')}
      />

      {/* Label Area (Clickable) */}
      <text
        fill="white"
        fontSize="1.5px"
        fontFamily="monospace"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('I2C label area')}
      >
        <tspan y="6.8" x="0.7">1</tspan>
        <tspan y="8.9" x="2.3">GND</tspan>
        <tspan y="11.4" x="2.3">VCC</tspan>
        <tspan y="14" x="2.3">SDA</tspan>
        <tspan y="16.6" x="2.3">SCL</tspan>
      </text>

      {/* Character Area (Clickable) */}
      <rect
        x="12.45"
        y="12.55"
        fill="url(#characters)"
        width="56.2"
        height="11.5"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Character area')}
      />

      {/* "Dots" or "Characters" Path (Clickable) */}
      <path
        transform="translate(12.45, 12.55)"
        d="M 0.00 0.00h0.55v0.65h-0.55Z M 2.40 0.00h0.55v0.65h-0.55Z M 0.00 0.70h0.55v0.65h-0.55Z M 2.40 0.70h0.55v0.65h-0.55Z M 0.00 1.40h0.55v0.65h-0.55Z M 2.40 1.40h0.55v0.65h-0.55Z M 0.00 2.10h0.55v0.65h-0.55Z M 0.60 2.10h0.55v0.65h-0.55Z M 1.20 2.10h0.55v0.65h-0.55Z M 1.80 2.10h0.55v0.65h-0.55Z M 2.40 2.10h0.55v0.65h-0.55Z M 0.00 2.80h0.55v0.65h-0.55Z M 2.40 2.80h0.55v0.65h-0.55Z M 0.00 3.50h0.55v0.65h-0.55Z M 2.40 3.50h0.55v0.65h-0.55Z M 0.00 4.20h0.55v0.65h-0.55Z M 2.40 4.20h0.55v0.65h-0.55Z M 4.15 1.40h0.55v0.65h-0.55Z M 4.75 1.40h0.55v0.65h-0.55Z M 5.35 1.40h0.55v0.65h-0.55Z M 3.55 2.10h0.55v0.65h-0.55Z M 5.95 2.10h0.55v0.65h-0.55Z M 3.55 2.80h0.55v0.65h-0.55Z M 4.15 2.80h0.55v0.65h-0.55Z M 4.75 2.80h0.55v0.65h-0.55Z M 5.35 2.80h0.55v0.65h-0.55Z M 5.95 2.80h0.55v0.65h-0.55Z M 3.55 3.50h0.55v0.65h-0.55Z M 4.15 4.20h0.55v0.65h-0.55Z M 4.75 4.20h0.55v0.65h-0.55Z M 5.35 4.20h0.55v0.65h-0.55Z M 7.70 0.00h0.55v0.65h-0.55Z M 8.30 0.00h0.55v0.65h-0.55Z M 8.30 0.70h0.55v0.65h-0.55Z M 8.30 1.40h0.55v0.65h-0.55Z M 8.30 2.10h0.55v0.65h-0.55Z M 8.30 2.80h0.55v0.65h-0.55Z M 8.30 3.50h0.55v0.65h-0.55Z M 7.70 4.20h0.55v0.65h-0.55Z M 8.30 4.20h0.55v0.65h-0.55Z M 8.90 4.20h0.55v0.65h-0.55Z M 11.25 0.00h0.55v0.65h-0.55Z M 11.85 0.00h0.55v0.65h-0.55Z M 11.85 0.70h0.55v0.65h-0.55Z M 11.85 1.40h0.55v0.65h-0.55Z M 11.85 2.10h0.55v0.65h-0.55Z M 11.85 2.80h0.55v0.65h-0.55Z M 11.85 3.50h0.55v0.65h-0.55Z M 11.25 4.20h0.55v0.65h-0.55Z M 11.85 4.20h0.55v0.65h-0.55Z M 12.45 4.20h0.55v0.65h-0.55Z M 14.80 1.40h0.55v0.65h-0.55Z M 15.40 1.40h0.55v0.65h-0.55Z M 16.00 1.40h0.55v0.65h-0.55Z M 14.20 2.10h0.55v0.65h-0.55Z M 16.60 2.10h0.55v0.65h-0.55Z M 14.20 2.80h0.55v0.65h-0.55Z M 16.60 2.80h0.55v0.65h-0.55Z M 14.20 3.50h0.55v0.65h-0.55Z M 16.60 3.50h0.55v0.65h-0.55Z M 14.80 4.20h0.55v0.65h-0.55Z M 15.40 4.20h0.55v0.65h-0.55Z M 16.00 4.20h0.55v0.65h-0.55Z M 21.30 0.00h0.55v0.65h-0.55Z M 23.70 0.00h0.55v0.65h-0.55Z M 21.30 0.70h0.55v0.65h-0.55Z M 23.70 0.70h0.55v0.65h-0.55Z M 21.30 1.40h0.55v0.65h-0.55Z M 23.70 1.40h0.55v0.65h-0.55Z M 21.30 2.10h0.55v0.65h-0.55Z M 22.50 2.10h0.55v0.65h-0.55Z M 23.70 2.10h0.55v0.65h-0.55Z M 21.30 2.80h0.55v0.65h-0.55Z M 22.50 2.80h0.55v0.65h-0.55Z M 23.70 2.80h0.55v0.65h-0.55Z M 21.30 3.50h0.55v0.65h-0.55Z M 22.50 3.50h0.55v0.65h-0.55Z M 23.70 3.50h0.55v0.65h-0.55Z M 21.90 4.20h0.55v0.65h-0.55Z M 23.10 4.20h0.55v0.65h-0.55Z M 25.45 1.40h0.55v0.65h-0.55Z M 26.05 1.40h0.55v0.65h-0.55Z M 26.65 1.40h0.55v0.65h-0.55Z M 24.85 2.10h0.55v0.65h-0.55Z M 27.25 2.10h0.55v0.65h-0.55Z M 24.85 2.80h0.55v0.65h-0.55Z M 27.25 2.80h0.55v0.65h-0.55Z M 24.85 3.50h0.55v0.65h-0.55Z M 27.25 3.50h0.55v0.65h-0.55Z M 25.45 4.20h0.55v0.65h-0.55Z M 26.05 4.20h0.55v0.65h-0.55Z M 26.65 4.20h0.55v0.65h-0.55Z M 28.40 1.40h0.55v0.65h-0.55Z M 29.60 1.40h0.55v0.65h-0.55Z M 30.20 1.40h0.55v0.65h-0.55Z M 28.40 2.10h0.55v0.65h-0.55Z M 29.00 2.10h0.55v0.65h-0.55Z M 30.80 2.10h0.55v0.65h-0.55Z M 28.40 2.80h0.55v0.65h-0.55Z M 28.40 3.50h0.55v0.65h-0.55Z M 28.40 4.20h0.55v0.65h-0.55Z M 32.55 0.00h0.55v0.65h-0.55Z M 33.15 0.00h0.55v0.65h-0.55Z M 33.15 0.70h0.55v0.65h-0.55Z M 33.15 1.40h0.55v0.65h-0.55Z M 33.15 2.10h0.55v0.65h-0.55Z M 33.15 2.80h0.55v0.65h-0.55Z M 33.15 3.50h0.55v0.65h-0.55Z M 32.55 4.20h0.55v0.65h-0.55Z M 33.15 4.20h0.55v0.65h-0.55Z M 33.75 4.20h0.55v0.65h-0.55Z M 37.90 0.00h0.55v0.65h-0.55Z M 37.90 0.70h0.55v0.65h-0.55Z M 36.10 1.40h0.55v0.65h-0.55Z M 36.70 1.40h0.55v0.65h-0.55Z M 37.90 1.40h0.55v0.65h-0.55Z M 35.50 2.10h0.55v0.65h-0.55Z M 37.30 2.10h0.55v0.65h-0.55Z M 37.90 2.10h0.55v0.65h-0.55Z M 35.50 2.80h0.55v0.65h-0.55Z M 37.90 2.80h0.55v0.65h-0.55Z M 35.50 3.50h0.55v0.65h-0.55Z M 37.90 3.50h0.55v0.65h-0.55Z M 36.10 4.20h0.55v0.65h-0.55Z M 36.70 4.20h0.55v0.65h-0.55Z M 37.30 4.20h0.55v0.65h-0.55Z M 37.90 4.20h0.55v0.65h-0.55Z M 40.25 0.00h0.55v0.65h-0.55Z M 40.25 0.70h0.55v0.65h-0.55Z M 40.25 1.40h0.55v0.65h-0.55Z M 40.25 2.10h0.55v0.65h-0.55Z M 40.25 4.20h0.55v0.65h-0.55Z"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Character dots')}
      />
    </svg>
  );
};

export default ClickableLCD
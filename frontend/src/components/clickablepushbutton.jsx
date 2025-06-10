import React from 'react';

const ClickablePushButton = ({
  width = "17.8mm",
  height = "12mm",
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
      width={width}
      height={height}
      version="1.1"
      viewBox="-3 0 18 12"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...props}
    >
      <defs>
        <linearGradient x1="0" x2="1" y1="0" y2="1" id="grad-up-pushbutton0">
          <stop stopColor="#ffffff" offset="0" />
          <stop offset="0.3" stopColor="red" />
          <stop offset="0.5" stopColor="red" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient x1="1" x2="0" y1="1" y2="0" id="grad-down-pushbutton0">
          <stop stopColor="#ffffff" offset="0" />
          <stop offset="0.3" stopColor="red" />
          <stop offset="0.5" stopColor="red" />
          <stop offset="1" />
        </linearGradient>
      </defs>

      {/* Outer body - draggable */}
      <rect
        x="0"
        y="0"
        width="12"
        height="12"
        rx=".44"
        ry=".44"
        fill="#464646"
        style={{ cursor: 'grab' }}
        onMouseDown={onStartDrag}
        onClick={handleClick('Body')}
      />

      {/* Button face */}
      <rect
        x=".75"
        y=".75"
        width="10.5"
        height="10.5"
        rx=".211"
        ry=".211"
        fill="#eaeaea"
        style={{ cursor: 'pointer' }}
        onClick={handleClick('Button face')}
      />

      {/* Mounting holes */}
      <g fill="#1b1b1">
        <circle cx="1.767" cy="1.7916" r=".37" style={{ cursor: 'pointer' }} onClick={handleClick('Mounting hole top-left')} />
        <circle cx="10.161" cy="1.7916" r=".37" style={{ cursor: 'pointer' }} onClick={handleClick('Mounting hole top-right')} />
        <circle cx="10.161" cy="10.197" r=".37" style={{ cursor: 'pointer' }} onClick={handleClick('Mounting hole bottom-right')} />
        <circle cx="1.767" cy="10.197" r=".37" style={{ cursor: 'pointer' }} onClick={handleClick('Mounting hole bottom-left')} />
      </g>

      {/* Terminals */}
      <g fill="#999" strokeWidth="1.0154">
        <path
          d="m12.365 2.426c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Terminal right top')}
        />
        <path
          d="m12.365 7.5c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Terminal right bottom')}
        />
        <path
          d="m-0.35085 4.3526c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Terminal left top')}
        />
        <path
          d="m-0.35085 9.4266c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Terminal left bottom')}
        />
      </g>

      {/* Button cap (main interactive part) */}
      <g>
        <circle
          cx="6"
          cy="6"
          r="3.822"
          fill="url(#grad-up-pushbutton0)"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Button cap')}
        />
        <circle
          className="button-active-circle"
          cx="6"
          cy="6"
          r="3.822"
          fill="url(#grad-down-pushbutton0)"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Button cap (active)')}
        />
        <circle
          cx="6"
          cy="6"
          r="2.9"
          stroke="#2f2f2f"
          strokeOpacity=".47"
          strokeWidth=".08"
          fill="red"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Button center')}
        />
      </g>
    </svg>
  );
};

export default ClickablePushButton;
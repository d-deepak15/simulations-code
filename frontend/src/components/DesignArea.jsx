import React, { useState, useRef } from "react";
import ClickableResistor from './Clickresistor';
import ClickableArduino from './clickablearduino';
import ClickableLED from './clickableled';
import ClickableBreadboard from './clickablebreadboard';
import ClickableLCD from './clickablelcd';
import ClickablePushbutton from './clickablepushbutton';

const componentMap = {
  "Resistor": ClickableResistor,
  "Arduino uno": ClickableArduino,
  "LED": ClickableLED,
  "Breadboard Full": ClickableBreadboard,
  "LCD I2C": ClickableLCD,
  "Pushbutton": ClickablePushbutton
};

export default function DesignArea() {
  const [items, setItems] = useState([]);
  const [draggingIdx, setDraggingIdx] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);

  const dragOffset = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("component");
    if (!data) return;
    const component = JSON.parse(data);
    const rect = containerRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left - panOffset.x) / zoom;
    const y = (e.clientY - rect.top - panOffset.y) / zoom;

    let width = 100;
    let height = 100;

    switch(component.name) {
      case "Arduino uno":
        width = 200;
        height = 150;
        break;
      case "Breadboard Full":
        width = 300;
        height = 100;
        break;
      case "Resistor":
        width = 200;
        height = 100;
        break;
      case "LED":
        width = 100;
        height = 100;
        break;
      case "Pushbutton":
        width = 80;
        height = 80;
        break;
      case "LCD I2C":
        width = 180;
        height = 60;
        break;
      default:
        width = 100;
        height = 100;
    }

    setItems((prev) => [
      ...prev,
      { ...component, x, y, width, height }
    ]);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleComponentMouseDown = (e, idx) => {
    e.stopPropagation();
    const rect = containerRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: (e.clientX - rect.left - panOffset.x) / zoom - items[idx].x,
      y: (e.clientY - rect.top - panOffset.y) / zoom - items[idx].y
    };
    setDraggingIdx(idx);
  };

  const handleWorkspaceMouseDown = (e) => {
    if (e.target === containerRef.current || e.target.closest('[data-workspace]')) {
      setIsPanning(true);
      panStart.current = {
        x: e.clientX - panOffset.x,
        y: e.clientY - panOffset.y
      };
    }
  };

  const handleMouseMove = (e) => {
    if (isPanning) {
      setPanOffset({
        x: e.clientX - panStart.current.x,
        y: e.clientY - panStart.current.y
      });
    } else if (draggingIdx !== null) {
      const rect = containerRef.current.getBoundingClientRect();
      const newX = (e.clientX - rect.left - panOffset.x) / zoom - dragOffset.current.x;
      const newY = (e.clientY - rect.top - panOffset.y) / zoom - dragOffset.current.y;

      setItems((prev) =>
        prev.map((item, idx) =>
          idx === draggingIdx ? { ...item, x: newX, y: newY } : item
        )
      );
    }
  };

  const handleMouseUp = () => {
    setDraggingIdx(null);
    setIsPanning(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.min(Math.max(zoom * zoomFactor, 0.1), 5);

    const deltaZoom = newZoom - zoom;
    setPanOffset(prev => ({
      x: prev.x - (mouseX - prev.x) * (deltaZoom / zoom),
      y: prev.y - (mouseY - prev.y) * (deltaZoom / zoom)
    }));

    setZoom(newZoom);
  };

  const resetView = () => {
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      data-workspace
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#f8f9fa",
        overflow: "hidden",
        cursor: isPanning ? "grabbing" : "grab"
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onMouseDown={handleWorkspaceMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* Zoom Controls */}
      <div style={{
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: 5
      }}>
        <button
          onClick={() => setZoom(zoom * 1.2)}
          style={{
            padding: "8px 12px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer"
          }}
        >
          +
        </button>
        <button
          onClick={() => setZoom(zoom * 0.8)}
          style={{
            padding: "8px 12px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer"
          }}
        >
          -
        </button>
        <button
          onClick={resetView}
          style={{
            padding: "8px 12px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 10
          }}
        >
          Reset
        </button>
      </div>

      {/* Zoom Indicator */}
      <div style={{
        position: "absolute",
        bottom: 10,
        right: 10,
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "4px 8px",
        borderRadius: 4,
        fontSize: 12,
        zIndex: 1000
      }}>
        {Math.round(zoom * 100)}%
      </div>

      {/* Workspace */}
      <div
        data-workspace
        style={{
          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoom})`,
          transformOrigin: "0 0",
          width: "100%",
          height: "100%"
        }}
      >
        {items.map((item, idx) => {
          const Component = componentMap[item.name];
          return Component ? (
            <Component
              key={idx}
              width={item.width}
              height={item.height}
              style={{
                position: "absolute",
                left: item.x,
                top: item.y,
                userSelect: "none"
              }}
              onStartDrag={(e) => handleComponentMouseDown(e, idx)}
            />
          ) : (
            <div
              key={idx}
              style={{
                position: "absolute",
                left: item.x,
                top: item.y,
                width: item.width,
                height: item.height,
                cursor: draggingIdx === idx ? "grabbing" : "move",
                userSelect: "none"
              }}
              onMouseDown={(e) => handleComponentMouseDown(e, idx)}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  pointerEvents: "none"
                }}
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

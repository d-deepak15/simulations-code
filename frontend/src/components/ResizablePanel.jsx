import React, { useState, useRef, useEffect } from "react";

export default function ResizablePanel({ 
  direction = "horizontal", 
  min = 200, 
  max = 500,
  children 
}) {
  const [size, setSize] = useState(min);
  const isDragging = useRef(false);
  const startPos = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startPos.current = direction === "horizontal" ? e.clientX : e.clientY;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    
    const currentPos = direction === "horizontal" ? e.clientX : e.clientY;
    const newSize = direction === "horizontal" 
      ? size + (currentPos - startPos.current)
      : size - (currentPos - startPos.current);

    if (newSize > min && newSize < max) {
      setSize(newSize);
      startPos.current = currentPos;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div 
      className={`resizable-panel ${direction}`}
      style={{
        width: direction === "horizontal" ? `${size}px` : "100%",
        height: direction === "vertical" ? `${size}px` : "100%"
      }}
    >
      {children}
      <div 
        className="resize-handle"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}

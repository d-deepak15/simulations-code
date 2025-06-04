import React from "react";
import resistorSVG from '../assets/resistor.svg';
import ledSVG from '../assets/led.svg';
import arduinoSVG from '../assets/arduino.svg';
import bbFullSVG from '../assets/bbfull.svg';
import pushbuttonSVG from '../assets/pushbutton.svg';
import LCDI2CSVG from '../assets/lcd.svg';

const components = [
  { name: "Arduino uno", img: arduinoSVG },
  { name: "LED", img: ledSVG },
  { name: "Resistor", img: resistorSVG },
  { name: "Pushbutton", img: pushbuttonSVG },
  { name: "Breadboard Full", img: bbFullSVG },
  { name: "LCD I2C", img: LCDI2CSVG },
];

export default function ComponentPanel() {
  const handleDragStart = (e, component) => {
    e.dataTransfer.setData("component", JSON.stringify(component));
  };

  return (
    <div style={{
      padding: 16,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "#f8f9fa",
      borderLeft: "1px solid #dee2e6"
    }}>
      <div style={{
        padding: "12px 16px",
        background: "#e9ecef",
        borderBottom: "1px solid #ced4da",
        fontSize: 16,
        fontWeight: 500,
        color: "#212529"
      }}>
        Components
      </div>
      <div style={{
        flex: 1,
        padding: 16,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: 16,
        overflowY: "auto"
      }}>
        {components.map((component, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, component)}
            style={{
              padding: 12,
              background: "#fff",
              borderRadius: 8,
              border: "1px solid #dee2e6",
              cursor: "grab"
            }}
          >
            <img
              src={component.img}
              alt={component.name}
              style={{
                width: "100%",
                height: 60,
                marginBottom: 8,
                pointerEvents: "none"
              }}
            />
            <div style={{
              textAlign: "center",
              fontSize: 13,
              color: "#495057",
              fontWeight: 500
            }}>
              {component.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

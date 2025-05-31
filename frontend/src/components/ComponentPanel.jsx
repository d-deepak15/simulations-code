// ComponentPanel.jsx
import resistorSVG from '../assets/resistor.svg'; // 👈 Import your local SVG
import ledSVG from '../assets/led.svg';
import arduinoSVG from '../assets/arduino.svg';
import bbFullSVG from '../assets/bbfull.svg';
import pushbuttonSVG from '../assets/pushbutton.svg';
import LCDI2CSVG from '../assets/lcd.svg';
const components = [
  { name: "Arduino uno", img: arduinoSVG },
  { name: "LED", img: ledSVG },
  { name: "Resistor", img: resistorSVG }, // 👈 Use imported SVG here
  { name: "Pushbutton", img: pushbuttonSVG },
  { name: "Breadboard Full", img: bbFullSVG },
  { name: "LCD I2C", img: LCDI2CSVG },
];

export default function ComponentPanel() {
  return (
    <div style={{ padding: 16, height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Components Header Box */}
      <div style={{
        background: "#e3f1fb",
        border: "1.5px solid #bfc7d0",
        borderRadius: 6,
        padding: "8px 12px",
        marginBottom: 16,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        color: "#333"
      }}>
        Components
      </div>

      {/* Search Bar */}
      <div style={{
        display: "flex", 
        alignItems: "center", 
        marginBottom: 16, 
        background: "#e3f1fb", 
        borderRadius: 6, 
        padding: "6px 10px",
        border: "1px solid #bfc7d0"
      }}>
        <input
          type="text"
          placeholder="search"
          style={{
            flex: 1, 
            border: "none", 
            background: "transparent", 
            fontSize: 15, 
            outline: "none"
          }}
        />
        <span style={{ marginLeft: 8, fontSize: 18 }}>🔍</span>
      </div>

      {/* Components Grid */}
      <div style={{
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", 
        gap: 12,
        flex: 1,
        overflowY: "auto"
      }}>
        {components.map((c, i) => (
          <div key={i} style={{
            background: "#fff", 
            border: "1.5px solid #bfc7d0", 
            borderRadius: 8,
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            padding: 10
          }}>
            <img src={c.img} alt={c.name} style={{ width: 48, height: 48, marginBottom: 6 }} />
            <span style={{ fontSize: 13, color: "#333", textAlign: "center" }}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
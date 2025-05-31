export default function Toolbar() {
  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      gap: 16, 
      justifyContent: "flex-start"
    }}>
      <button title="Undo" style={toolBtn}>⟲</button>
      <button title="Redo" style={toolBtn}>⟳</button>
      <button title="Copy" style={toolBtn}>⧉</button>
      <button title="Delete" style={toolBtn}>🗑️</button>
    </div>
  );
}

const toolBtn = {
  width: 40,
  height: 40,
  borderRadius: 6,
  border: "1.5px solid #bfc7d0",
  background: "#f6f8fb",
  fontSize: 18,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

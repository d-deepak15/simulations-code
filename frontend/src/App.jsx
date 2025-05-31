import React, { useState, useRef, useEffect } from "react";
import LogoBox from "./components/LogoBox";
import Toolbar from "./components/Toolbar";
import DesignArea from "./components/DesignArea";
import ComponentPanel from "./components/ComponentPanel";
import CodeEditor from "./components/CodeEditor";

const sampleCode = `// C++ code
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`;

export default function App() {
  const [codeOpen, setCodeOpen] = useState(false);
  const [code, setCode] = useState(sampleCode);
  const [componentPanelOpen, setComponentPanelOpen] = useState(true);

  // For positioning the code box below the code button
  const codeBtnRef = useRef(null);
  const [codeBoxPos, setCodeBoxPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (codeOpen && codeBtnRef.current) {
      const rect = codeBtnRef.current.getBoundingClientRect();
      setCodeBoxPos({
        top: rect.bottom + window.scrollY + 8, // 8px below the button
        left: rect.left + window.scrollX - 120  // shift left so it aligns under the button
      });
    }
  }, [codeOpen]);

  const logoRowHeight = 44;
  const toolbarRowHeight = 48;

  return (
    <div style={{ height: "100vh", width: "100vw", background: "#fff", display: "flex", flexDirection: "column" }}>
      {/* Logo Row */}
      <div style={{
        height: logoRowHeight,
        display: "flex",
        alignItems: "center",
        paddingLeft: 16,
        borderBottom: "2px solid #bfc7d0",
        background: "#f6f8fb"
      }}>
        <LogoBox />
      </div>

      {/* Toolbar + Code/Simulation Row */}
      <div style={{
        height: toolbarRowHeight,
        display: "flex",
        alignItems: "center",
        borderBottom: "2px solid #bfc7d0",
        background: "#fff",
        position: "relative"
      }}>
        {/* Toolbar left-aligned */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Toolbar />
        </div>
        <div style={{ flex: 1 }} />
        {/* Code/Simulation buttons right-aligned */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginRight: 24
        }}>
          <button
            ref={codeBtnRef}
            style={codeBtn}
            onClick={() => setCodeOpen(v => !v)}
          >
            code&lt;&gt;
          </button>
          <button style={simBtn}>Start Simulation</button>
        </div>
        {/* Code Box (portrait, below code button) */}
        {codeOpen && (
          <div
            style={{
              position: "absolute",
              top: toolbarRowHeight + 8, // 8px below the toolbar row
              left: codeBoxPos.left - document.body.getBoundingClientRect().left,
              width: 320,
              height: 400,
              background: "#222",
              border: "2px solid #bfc7d0",
              borderRadius: 10,
              boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", padding: 8 }}>
              <button
                onClick={() => setCodeOpen(false)}
                style={{
                  background: "#fff",
                  border: "1px solid #bfc7d0",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
                title="Close"
              >
                ✕
              </button>
            </div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <CodeEditor code={code} setCode={setCode} />
            </div>
          </div>
        )}
      </div>

      {/* Main Area: Design + Components */}
      <div style={{ flex: 1, display: "flex", position: "relative", minHeight: 0 }}>
        {/* Design Area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            background: "#fff",
            borderRight: "2px solid #bfc7d0",
            minHeight: 0,
            overflow: "auto",
            position: "relative"
          }}
        >
          <DesignArea />
        </div>
        {/* Right Component Panel */}
        <div style={{
          width: componentPanelOpen ? 300 : 0,
          transition: "width 0.3s",
          background: "#f6f8fb",
          borderLeft: componentPanelOpen ? "2px solid #bfc7d0" : "none",
          position: "relative",
          overflow: "hidden"
        }}>
          {componentPanelOpen && <ComponentPanel />}
        </div>
        {/* Expand/Collapse Arrow (always vertically centered) */}
        <button
          onClick={() => setComponentPanelOpen(open => !open)}
          style={{
            position: "absolute",
            right: componentPanelOpen ? 300 : 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 32,
            height: 32,
            borderRadius: componentPanelOpen ? "6px 0 0 6px" : "0 6px 6px 0",
            border: "1px solid #bfc7d0",
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            cursor: "pointer",
            zIndex: 10,
            transition: "right 0.3s"
          }}
          title={componentPanelOpen ? "Collapse" : "Expand"}
        >
          {componentPanelOpen ? "◀" : "▶"}
        </button>
      </div>
    </div>
  );
}

const codeBtn = {
  height: 32,
  padding: "0 14px",
  borderRadius: 6,
  border: "1.5px solid #bfc7d0",
  background: "#e3f1fb",
  fontWeight: "bold",
  fontSize: 15,
  cursor: "pointer"
};
const simBtn = {
  height: 32,
  padding: "0 14px",
  borderRadius: 6,
  border: "1.5px solid #bfc7d0",
  background: "#e3f1fb",
  fontWeight: "bold",
  fontSize: 15,
  cursor: "pointer"
};

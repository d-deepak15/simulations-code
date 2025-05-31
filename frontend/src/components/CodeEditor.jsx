import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, setCode }) {
  return (
    <Editor
      height="100%"           // Fills the parent div (which is 220px tall)
      defaultLanguage="cpp"   // Use C/C++ syntax highlighting
      value={code}
      onChange={setCode}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        automaticLayout: true
      }}
    />
  );
}

import React, { useState } from "react";

export default function Adder() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const sum = parseFloat(a) + parseFloat(b);

  return (
    <div className="component-card">
      <h3>ADDER</h3>
      <div className="component-display">{sum.toFixed(2)}</div>
      
      <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {/* A */}
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "0 0 0.5rem 0", fontWeight: "600", fontSize: "0.9rem" }}>A</p>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            style={{ marginBottom: "0.5rem" }}
          />
          <div className="component-controls">
            <button className="btn" onClick={() => setA(a - 1)} style={{ background: "#ef4444", padding: "0.5rem 0.75rem" }}>−</button>
            <button className="btn" onClick={() => setA(a + 1)} style={{ background: "#22c55e", padding: "0.5rem 0.75rem" }}>+</button>
          </div>
        </div>

        {/* B */}
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "0 0 0.5rem 0", fontWeight: "600", fontSize: "0.9rem" }}>B</p>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            style={{ marginBottom: "0.5rem" }}
          />
          <div className="component-controls">
            <button className="btn" onClick={() => setB(b - 1)} style={{ background: "#ef4444", padding: "0.5rem 0.75rem" }}>−</button>
            <button className="btn" onClick={() => setB(b + 1)} style={{ background: "#22c55e", padding: "0.5rem 0.75rem" }}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="component-card">
      <h3>COUNTER</h3>
      <div className="component-display">{count}</div>
      <div className="component-controls">
        <button 
          className="btn"
          onClick={() => setCount(count - 1)}
          style={{ background: "#ef4444" }}
        >
          − Minus
        </button>
        <button 
          className="btn"
          onClick={() => setCount(count + 1)}
          style={{ background: "#22c55e" }}
        >
          + Plus
        </button>
      </div>
    </div>
  );
}
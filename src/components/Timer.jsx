import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const displayTime = () => {
    if (minutes > 0) {
      return `${minutes}m ${String(secs).padStart(2, '0')}s`;
    }
    return `${secs}s`;
  };

  return (
    <div className="component-card">
      <h3>TIMER</h3>
      <div className="component-display">{displayTime()}</div>
      <div className="component-controls">
        <button 
          className="btn"
          onClick={() => setRunning(!running)}
          style={{ background: running ? "#f59e0b" : "#4f46e5" }}
        >
          {running ? "❚❚ Pause" : "▷ Start"}
        </button>
        <button 
          className="btn"
          onClick={() => { setRunning(false); setSeconds(0); }}
          style={{ background: "#ef4444" }}
        >
          ↻ Reset
        </button>
      </div>
    </div>
  );
}
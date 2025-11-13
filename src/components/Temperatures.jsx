import React, { useState, useEffect } from "react";

export default function Temperatures() {
  const [celsius, setCelsius] = useState(25);
  const [fahrenheit, setFahrenheit] = useState((25 * 9) / 5 + 32);
  const [kelvin, setKelvin] = useState(25 + 273.15);
  const [active, setActive] = useState("celsius");

  useEffect(() => {
    if (active === "celsius") {
      const c = parseFloat(celsius);
      if (!isNaN(c)) {
        setFahrenheit((c * 9) / 5 + 32);
        setKelvin(c + 273.15);
      }
    }
  }, [celsius, active]);

  useEffect(() => {
    if (active === "fahrenheit") {
      const f = parseFloat(fahrenheit);
      if (!isNaN(f)) {
        setCelsius(((f - 32) * 5) / 9);
        setKelvin(((f - 32) * 5) / 9 + 273.15);
      }
    }
  }, [fahrenheit, active]);

  useEffect(() => {
    if (active === "kelvin") {
      const k = parseFloat(kelvin);
      if (!isNaN(k)) {
        setCelsius(k - 273.15);
        setFahrenheit(((k - 273.15) * 9) / 5 + 32);
      }
    }
  }, [kelvin, active]);

  return (
    <div className="component-card">
      <h3>TEMPERATURES</h3>
      
      <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "0.75rem" }}>
        {/* Celsius */}
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "0 0 0.5rem 0", fontWeight: "600", fontSize: "0.85rem" }}>°C</p>
          <input
            type="number"
            value={celsius.toFixed(2)}
            onChange={(e) => {
              setActive("celsius");
              setCelsius(e.target.value);
            }}
            style={{ marginBottom: "0.5rem" }}
          />
          <div className="component-controls" style={{ justifyContent: "center", gap: "0.5rem" }}>
            <button className="btn" onClick={() => { setActive("celsius"); setCelsius(parseFloat(celsius) - 1); }} style={{ background: "#ef4444", padding: "0.4rem 0.6rem", fontSize: "0.9rem" }}>−</button>
            <button className="btn" onClick={() => { setActive("celsius"); setCelsius(parseFloat(celsius) + 1); }} style={{ background: "#22c55e", padding: "0.4rem 0.6rem", fontSize: "0.9rem" }}>+</button>
          </div>
        </div>

        {/* Fahrenheit */}
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "0 0 0.5rem 0", fontWeight: "600", fontSize: "0.85rem" }}>°F</p>
          <input
            type="number"
            value={fahrenheit.toFixed(2)}
            onChange={(e) => {
              setActive("fahrenheit");
              setFahrenheit(e.target.value);
            }}
            style={{ marginBottom: "0.5rem" }}
          />
          <div className="component-controls" style={{ justifyContent: "center", gap: "0.5rem" }}>
            <button className="btn" onClick={() => { setActive("fahrenheit"); setFahrenheit(parseFloat(fahrenheit) - 1); }} style={{ background: "#ef4444", padding: "0.4rem 0.6rem", fontSize: "0.9rem" }}>−</button>
            <button className="btn" onClick={() => { setActive("fahrenheit"); setFahrenheit(parseFloat(fahrenheit) + 1); }} style={{ background: "#22c55e", padding: "0.4rem 0.6rem", fontSize: "0.9rem" }}>+</button>
          </div>
        </div>

        {/* Kelvin */}
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: "0 0 0.5rem 0", fontWeight: "600", fontSize: "0.85rem" }}>°K</p>
          <input
            type="number"
            value={kelvin.toFixed(2)}
            onChange={(e) => {
              setActive("kelvin");
              setKelvin(e.target.value);
            }}
            style={{ marginBottom: "0.5rem" }}
          />
          <div className="component-controls" style={{ justifyContent: "center", gap: "0.5rem" }}>
            <button className="btn" onClick={() => { setActive("kelvin"); setKelvin(parseFloat(kelvin) - 1); }} style={{ background: "#ef4444", padding: "0.4rem 0.6rem", fontSize: "0.9rem" }}>−</button>
            <button className="btn" onClick={() => { setActive("kelvin"); setKelvin(parseFloat(kelvin) + 1); }} style={{ background: "#22c55e", padding: "0.4rem 0.6rem", fontSize: "0.9rem" }}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
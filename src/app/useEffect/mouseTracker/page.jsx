"use client";
import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatedPosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatedPosition);
  }, []);

  return (
    <div>
      <h1>Mouse Konum Takibi</h1>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
}

export default MouseTracker;

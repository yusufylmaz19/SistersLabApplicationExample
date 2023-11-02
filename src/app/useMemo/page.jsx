"use client";
import React, { useState, useEffect, useMemo } from "react";

export default function Page() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "#000" : "#fff",
      color: dark ? "#fff" : "#000",
      width: "100px",
      height: "100px",
    };
  }, [dark]);

  // 1. case
  const doubleNumber = useMemo(() => {
    slowFunction(number);
  }, [number]);

  // 2. case
  useEffect(() => {
    console.log("tema değişti");
  }, [themeStyle]);

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button type="button" onClick={() => setDark(!dark)}>
        Change Theme
      </button>
      <p style={themeStyle}> {doubleNumber}</p>
    </div>
  );
}

function slowFunction(num) {
  console.log("slow function calıştı");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

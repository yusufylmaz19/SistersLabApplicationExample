"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";

export default function Page() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "#000" : "#fff",
    color: dark ? "#fff" : "#000",
    width: "100px",
    height: "100px",
  };

  const getItems = useCallback(
    (increment) => {
      return [
        number + increment,
        number + 1 + increment,
        number + 2 + increment,
      ];
    },
    [number]
  );

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button type="button" onClick={() => setDark(!dark)}>
        Change Theme
      </button>
      <div style={themeStyle}>
        <List getItems={getItems}></List>
      </div>
    </div>
  );
}

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("Updating Items");
  }, [getItems]);

  return items.map((item, index) => <div key={index}>{item}</div>);
}

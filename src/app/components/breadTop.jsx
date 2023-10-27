import React, { useState, useEffect } from "react";
import styles from "../burger/burger.module.css";
import Cheese from "./cheese";

export default function BreadTop({ bunCount, setBunCount, checkedCheese }) {
  const [bunPositons, setBunPositons] = useState([]);
  const [cheese, setCheese] = useState(false);

  useEffect(() => {
    setBunPositons((prevBunPosition) => {
      const newBunPosition = Array.from({ length: bunCount }, (_, index) => {
        if (index < prevBunPosition?.length) {
          return prevBunPosition[index];
        } else {
          return {
            top: `${Math.floor(Math.random() * 56) + 10}px`,
            left: `${Math.floor(Math.random() * 311) + 10}px`,
          };
        }
      });
      return newBunPosition;
    });
  }, [bunCount]);

  useEffect(() => {
    setCheese(checkedCheese);
  }, [checkedCheese]);

  console.log(checkedCheese);

  const removeItemFromBuns = (index) => {
    setBunPositons((prevPos) => prevPos.filter((_, i) => i !== index));
    setBunCount((prevBunCount) => prevBunCount - 1);
  };

  return (
    <div className={styles.bTop}>
      {cheese && <Cheese />}
      {bunPositons.map((pos, index) => (
        <Bun
          key={index}
          top={pos.top}
          left={pos.left}
          onClick={() => removeItemFromBuns(index)}
        />
      ))}
    </div>
  );
}

function Bun({ top, left, onClick }) {
  return (
    <div className={styles.bun} style={{ top, left }} onClick={onClick}></div>
  );
}

import React from "react";
import { IconContext } from "react-icons";
import styles from "../music/music.module.css";

export default function ButtonElement({ IconElement, onClick }) {
  return (
    <button className={styles.playButton} onClick={onClick}>
      <IconContext.Provider value={{ size: "2rem", color: "green" }}>
        {IconElement}
      </IconContext.Provider>
    </button>
  );
}

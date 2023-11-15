import React from "react";
import styles from "../../hangman/hangman.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
    </div>
  );
}

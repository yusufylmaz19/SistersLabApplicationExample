import React from "react";
import styles from "../../hangman/hangman.module.css";

export default function Word({ selectedWord, correctLetters }) {
  return (
    <div className={styles.word}>
      {selectedWord?.split("").map((letter, i) => {
        return (
          <span className={styles.letter} key={i}>
            {correctLetters?.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}

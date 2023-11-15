import React from "react";
import styles from "../../hangman/hangman.module.css";

export default function WrongLetters({ wrongLetters }) {
  return (
    <div className={styles.wrong_letters_container}>
      <div>
        {wrongLetters?.length > 0 && <p>Wrong</p>}
        {wrongLetters
          ?.map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
}

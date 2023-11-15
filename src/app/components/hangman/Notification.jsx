import React from "react";
import styles from "../../hangman/hangman.module.css";

export default function Notification({ showNotification }) {
  return (
    <div
      className={`${styles.notification_container} ${
        showNotification ? styles.show : ""
      }`}
    >
      <p>You have already entered this letter</p>
    </div>
  );
}

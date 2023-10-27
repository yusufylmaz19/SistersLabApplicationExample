import React from "react";
import styles from "../burger/burger.module.css";

export default function HamburgerNav({
  checkedCheese,
  setChekedCheese,
  setChekedLettuce,
  checkedLettuce,
  setChekedMeat,
  checkedMeat,
  setBunCount,
}) {
  const addBun = () => {
    setBunCount((previousBunCount) => previousBunCount + 1);
  };

  return (
    <div className={styles.nav}>
      <button onClick={addBun}>Add Bun</button>
      <div className={styles.flexRow}>
        Meat
        <input
          type="checkbox"
          value={checkedMeat}
          onChange={(e) => setChekedMeat(!checkedMeat)}
        />
      </div>
      <div className={styles.flexRow}>
        Lettuce
        <input
          type="checkbox"
          value={checkedLettuce}
          onChange={(e) => setChekedLettuce(!checkedLettuce)}
        />
      </div>
      <div className={styles.flexRow}>
        Cheese
        <input
          type="checkbox"
          value={checkedCheese}
          onChange={(e) => setChekedCheese(!checkedCheese)}
        />
      </div>
    </div>
  );
}

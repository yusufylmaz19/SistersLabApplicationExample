"use client";
import React, { useEffect, useState } from "react";
import styles from "./burger.module.css";
import HamburgerNav from "../components/hamburgerNav";
import BreadTop from "../components/breadTop";
import BreadBottom from "../components/breadBottom";
import Lettuce from "../components/lettuce";
import Cheese from "../components/cheese";
import Meat from "../components/meat";

export default function burger() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [checkedMeat, setChekedMeat] = useState(false);
  const [checkedLettuce, setChekedLettuce] = useState(false);
  const [checkedCheese, setChekedCheese] = useState(false);
  const [bunCount, setBunCount] = useState(0);
  const [totalPrice, setToalPrice] = useState(0);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    const meatPrice = 20;
    const cheesePrice = 15;
    const lettucePrice = 5;

    const updatedPrice =
      bunCount * 0.5 +
      (checkedMeat ? meatPrice : 0) +
      (checkedCheese ? cheesePrice : 0) +
      (checkedLettuce ? lettucePrice : 0);

    setToalPrice(updatedPrice);
  });



  return (
    domLoaded && (
      <div className={styles.box}>
        <div>Total Price : {totalPrice} ₺</div>
        <HamburgerNav
          checkedCheese={checkedCheese}
          setChekedCheese={setChekedCheese}
          setChekedLettuce={setChekedLettuce}
          checkedLettuce={checkedLettuce}
          setChekedMeat={setChekedMeat}
          checkedMeat={checkedMeat}
          setBunCount={setBunCount}
        />
        <BreadTop
          bunCount={bunCount}
          setBunCount={setBunCount}
          checkedCheese={checkedCheese}
        />
        {checkedMeat && <Meat />}
        {checkedLettuce && <Lettuce />}
        <BreadBottom />
      </div>
    )
  );
}

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/slices/counterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <a href="/useState">useState Example</a>
      <a href="/burger">Burger App</a>
      <a href="/useMemo">useMemo App</a>
      <a href="/useCallback">useCallback App</a>
      <a href="/useEffect/abort">Abort App</a>
      <a href="/useEffect/fetchExample">Fetch App</a>
      <a href="/useEffect/counter">Counter App</a>
      <a href="/useEffect/mouseTracker">Mouse App</a>
      <a href="/music">Music App</a>
      <a href="/movie">Movie App</a>
      <a href="/formik">Formik Example</a>
      <a href="/hangman">Hangman Game</a>
    </main>
  );
}

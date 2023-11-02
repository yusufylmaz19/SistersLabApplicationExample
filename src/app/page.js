import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="/useState">useState Example</a>
      <a href="/burger">Burger App</a>
      <a href="/useMemo">useMemo App</a>
      <a href="/useCallback">useCallback App</a>
      <a href="/useEffect/abort">Abort App</a>
      <a href="/useEffect/fetchExample">Fetch App</a>
      <a href="/useEffect/counter">Counter App</a>
      <a href="/useEffect/mouseTracker">Mouse App</a>
      <a href="/music">Music App</a>
    </main>
  );
}

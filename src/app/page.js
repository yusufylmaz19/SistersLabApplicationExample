import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="/useState">useState Example</a>
      <a href="/burger">Burger App</a>
    </main>
  );
}

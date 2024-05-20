import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import carrinho from "../pages/carrinho";

export default function Home() {
  return (
    <main className={styles.main}>
      Home
      <Link href={'login'}>Carrinho</Link>
    </main>
  );
}

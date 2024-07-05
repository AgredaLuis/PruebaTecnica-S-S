import styles from "./page.module.css";
import { About, Contact, Interests } from "@/containers/Home-page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <About />
        <Interests/>
        <Contact />
      </div>
    </main>
  );
}

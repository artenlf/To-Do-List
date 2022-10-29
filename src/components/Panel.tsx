import styles from "./Panel.module.css";
import Clipboard from "../../public/clipboard.svg";
import { Counter } from "./Counter";
export function Panel() {
  return (
    <section className={styles.panel}>
      <header>
        <div className={styles.wrapper}>
          <p className={styles.created}>Tasks created</p>
          <Counter />
        </div>
        <div className={styles.wrapper}>
          <p className={styles.concluded}>Concluded</p>
          <Counter />
        </div>
      </header>
      <div className={styles.content}>
        <img src={Clipboard} alt="clipboard icon" />
        <p>You haven't created any tasks yet</p>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </section>
  );
}

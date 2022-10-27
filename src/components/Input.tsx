import styles from "./Input.module.css";

export function Input() {
  return (
    <input
      className={styles.input}
      placeholder="Add new task"
      type="text"
    ></input>
  );
}

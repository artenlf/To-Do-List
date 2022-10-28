import { Trash } from "phosphor-react";
import styles from "./Delete.module.css";

export function Delete() {
  return (
    <button className={styles.delete} title="Delete task">
      <Trash size={24} />
    </button>
  );
}

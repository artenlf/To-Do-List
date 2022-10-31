import { PlusCircle } from "phosphor-react";
import styles from "./Create.module.css";

export function Create() {
  return (
    <div>
      <button type="submit" className={styles.button}>
        Create
        <PlusCircle weight="bold" size={16} className={styles.icon} />
      </button>
    </div>
  );
}

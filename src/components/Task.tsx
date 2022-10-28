import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";
import { Delete } from "./Delete";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div>
      <div className={styles.task}>
        <Checkbox />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Delete />
      </div>
    </div>
  );
}

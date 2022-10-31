import { Checkbox } from "./Checkbox";
import { Delete } from "./Delete";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  // onDeleteTask: (task: string) => void;
}

export function Task({ content }: TaskProps) {
  return (
    <div>
      <div className={styles.task}>
        <Checkbox />
        <p>{content}</p>
        <Delete />
      </div>
    </div>
  );
}

import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
  checked?: boolean;
}

export function Task({ content, onDeleteTask, checked }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }
  return (
    <div>
      <div className={styles.task}>
        <label className={styles.container}>
          <input type="checkbox" checked={checked} />
          <span className={styles.checkmark} />
        </label>
        <p>{content}</p>
        <button
          onClick={handleDeleteTask}
          className={styles.delete}
          title="Delete task"
        >
          <Trash size={24} className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

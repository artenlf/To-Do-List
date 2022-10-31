import { Trash } from "phosphor-react";
import { Checkbox } from "./Checkbox";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }
  return (
    <div>
      <div className={styles.task}>
        <Checkbox />
        <p>{content}</p>
        <button
          onClick={handleDeleteTask}
          className={styles.delete}
          title="Delete task"
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}

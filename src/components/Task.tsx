import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  task: {
    id: string;
    content: string;
    isComplete: boolean;
  };
  onTaskStatusChange: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onDeleteTask, onTaskStatusChange }: TaskProps) {
  function handleTaskStatusChange() {
    onTaskStatusChange(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }
  return (
    <div>
      <div className={styles.task}>
        <label className={styles.container}>
          <input type="checkbox" onChange={handleTaskStatusChange} />
          <span className={styles.checkmark} />
        </label>
        <p
          className={
            task.isComplete ? styles.checkedTask : styles.uncheckedTask
          }
        >
          {task.content}
        </p>
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

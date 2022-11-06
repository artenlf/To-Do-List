import styles from "./Panel.module.css";
import Clipboard from "../../public/clipboard.svg";
import { Counter } from "./Counter";
import { Task } from "./Task";
import { useState, FormEvent, ChangeEvent } from "react";
import { Create } from "./Create";

export function Panel() {
  const [tasks, setTasks] = useState([
    "Task text exemple test, test, test",
    "test2",
  ]);
  const [newTaskText, setNewTaskText] = useState("");
  const [createdTaskCounter, setCreatedTaskCounter] = useState(tasks.length);
  const [concludedTaskCounter, setConcludedTaskCounter] = useState(0);

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();
    setTasks([...tasks, newTaskText]);
    handleCreatedTaskCounter();
    setNewTaskText("");
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(e.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
    handleDeletedTaskCounter();
  }

  function handleCreatedTaskCounter() {
    setCreatedTaskCounter((state) => {
      return state + 1;
    });
  }

  function handleDeletedTaskCounter() {
    setCreatedTaskCounter((state) => {
      return state - 1;
    });
  }

  return (
    <>
      <section>
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <input
            onChange={handleNewTaskChange}
            className={styles.input}
            name="task"
            placeholder="Add new task"
            type="text"
            value={newTaskText}
          />
          <Create />
        </form>
      </section>
      <section className={styles.panel}>
        <header>
          <div className={styles.wrapper}>
            <p className={styles.created}>Tasks created</p>
            <Counter count={createdTaskCounter} />
          </div>
          <div className={styles.wrapper}>
            <p className={styles.concluded}>Concluded</p>
            <Counter count={concludedTaskCounter} />
          </div>
        </header>
        <div className={styles.content}>
          {tasks.length === 0 ? (
            <>
              <img src={Clipboard} alt="clipboard icon" />
              <p>You haven't created any tasks yet</p>
              <p>Create tasks and organize your to-do items</p>
            </>
          ) : (
            tasks.map((task) => {
              return (
                <Task content={task} key={task} onDeleteTask={deleteTask} />
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

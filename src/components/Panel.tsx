import styles from "./Panel.module.css";
import Clipboard from "../../public/clipboard.svg";
import { Counter } from "./Counter";
import { Task } from "./Task";
import { useState, FormEvent, ChangeEvent } from "react";
import { Create } from "./Create";

export function Panel() {
  const [tasks, setTasks] = useState(["Task text exemple test, test, test"]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(e.target.value);
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
            <Counter />
          </div>
          <div className={styles.wrapper}>
            <p className={styles.concluded}>Concluded</p>
            <Counter />
          </div>
        </header>
        <div className={styles.content}>
          {tasks.map((task) => {
            return <Task content={task} key={task} />;
          })}

          <img src={Clipboard} alt="clipboard icon" />
          <p>You haven't created any tasks yet</p>
          <p>Create tasks and organize your to-do items</p>
        </div>
      </section>
    </>
  );
}

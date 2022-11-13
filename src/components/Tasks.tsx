import { useState, FormEvent, ChangeEvent } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import styles from "./Tasks.module.css";
import Clipboard from "../../public/clipboard.svg";
import { Counter } from "./Counter";
import { Task } from "./Task";
import { PlusCircle } from "phosphor-react";

export function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      content:
        "This is a task example. You can test functions by clicking on the left checkbox to complete a task or clicking the trashcan icon on the right to delete it.",
      isComplete: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const createdTaskTotalCount = tasks.length;
  const completedTaskTotalCount = tasks.filter(
    (task) => task.isComplete
  ).length;

  function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: v4(),
        content: newTask,
        isComplete: false,
      },
    ]);
    setNewTask("");
  }

  function handleTaskStatusChange(id: string) {
    const taskListWithUpdatedTaskStatus = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
        return task;
      }
      return task;
    });

    setTasks(taskListWithUpdatedTaskStatus);
  }

  function handleDeleteTask(id: string) {
    const taskListWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(taskListWithoutDeletedOne);
  }

  return (
    <>
      <section>
        <form className={styles.form} onSubmit={handleCreateNewTask}>
          <input
            className={styles.input}
            name="task"
            placeholder="Add new task"
            type="text"
            onChange={handleTaskTextChange}
            value={newTask}
          />
          <button disabled={!newTask ? true : false} type="submit" className={styles.button}>
        Create
        <PlusCircle weight="bold" size={16} className={styles.icon} />
      </button>
        </form>
      </section>
      <section className={styles.panel}>
        <header>
          <div className={styles.wrapper}>
            <p className={styles.created}>Tasks created</p>
            <Counter count={createdTaskTotalCount} />
          </div>
          <div className={styles.wrapper}>
            <p className={styles.concluded}>Concluded</p>
            <Counter
              wide
              count={`${completedTaskTotalCount} of ${createdTaskTotalCount}`}
            />
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
                <Task
                  task={task}
                  key={task.id}
                  onTaskStatusChange={handleTaskStatusChange}
                  onDeleteTask={handleDeleteTask}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

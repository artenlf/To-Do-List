import styles from "./Counter.module.css";

interface CounterProps {
  count: number;
}

export function Counter({ count }: CounterProps) {
  return (
    <div className={styles.counter}>
      <p>{count}</p>
    </div>
  );
}

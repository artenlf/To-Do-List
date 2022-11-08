import { InputHTMLAttributes } from "react";
import styles from "./Counter.module.css";

interface CounterProps extends InputHTMLAttributes<HTMLInputElement> {
  count: any;
  wide?: boolean;
}

export function Counter({ count, wide }: CounterProps) {
  return (
    <div
      className={
        wide ? `${styles.counter} ${styles.wideCounter}` : styles.counter
      }
    >
      <p>{count}</p>
    </div>
  );
}

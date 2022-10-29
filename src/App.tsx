import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Panel } from "./components/Panel";
import { Create } from "./components/Create";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.wrapper2}>
          <Input />
          <Create />
        </div>
        <Panel />
      </div>
    </>
  );
}

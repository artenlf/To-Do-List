import "./global.css";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { Create } from "./components/Create";

export function App() {
  return (
    <>
      <div>Hello world</div>
      <Input />
      <Task />
      <Create />
    </>
  );
}

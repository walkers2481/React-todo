import "./styles.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [active, setActive] = useState(false);

  const onChangeTodoText = (event) => {
    console.log(event.target.value);
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") {
      return;
    } else if (todos.length >= 5) {
      setActive(true);
    } else {
      setTodos([...todos, todoText]);
      setTodoText("");
    }
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...todos];
    const newCompleteTodos = newTodos.splice(index, 1);
    setCompleteTodos([...completeTodos, newCompleteTodos]);
    setTodos(newTodos);
  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    const newTodos = newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
    setTodos([...todos, newTodos]);
  };

  const onClickBack = () => {
    setActive(false);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        /*disabled={todos.length >= 5}*/
      />

      <IncompleteTodos
        todos={todos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickReturn={onClickReturn} />

      <section className={active ? "message appear" : "message"}>
        <div className="container">
          <p>タスクを消化してください</p>
          <button onClick={onClickBack}>OK</button>
        </div>
      </section>

      <div className={active ? "mask" : ""}></div>
    </>
  );
};

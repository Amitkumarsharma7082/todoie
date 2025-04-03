import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import "./style.css";
import CounterComponent from "./components/CounterComponent";

const App = () => {
  return (
    <div className="todo-container">
      <CounterComponent text="Increment" />
      <Header title="Todoie App" />
      <TodoItem isCompleted={true} text="Eat" />
      <TodoItem text="Code" />
      <TodoItem text="Sleep" />
      <TodoItem text="Repeat" />
      <Button text="Add Todo" />
    </div>
  );
};

export default App;

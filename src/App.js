import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import "./style.css";

const App = () => {
  return (
    <div className="todo-container">
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

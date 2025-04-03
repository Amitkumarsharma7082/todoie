import React from "react";

// function MyHeader(props) {
//   return <h1>{props.title}</h1>;
// }
// <MyHeader title="This is my header" />;

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <span>
        {props.isCompleted ? <></> : <input type="checkbox" />}
        <span className="todo-item-text">{props.text}</span>
      </span>
      {/* <button className="todo-edit-button">...</button> */}
      <p>...</p>
    </li>
  );
};

export default TodoItem;

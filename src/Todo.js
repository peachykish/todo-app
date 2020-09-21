import React from "react";

function Todo(props) {
  return (
    <ul>
      <h3>
        {props.todo.description}
        {props.todo.title}
      </h3>
    </ul>
  );
}

export default Todo;

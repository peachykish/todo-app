import React from "react";

function Todo(props) {
  return (
    <ul>
      {props.todoList.map((item, index) => (
        <li key={index}>
          <input type="checkbox" defaultChecked={item.completed} onChange={() => props.checkItem(item.id)} />
          {item.name}
          <button onClick={() => props.deleteItem(item.id)}>Delete!</button>
          </li>
      ))}
    </ul>
  );
}

export default Todo;

import React from "react";
import "./App.css";
import avatar from "./image/profile.png";

const todoList = [
  {
    id: 1,
    title: "Go to Grocery",
    description: "pick up recipe ingredients",
    completed: false,
  },
  {
    id: 2,
    title: "Go to gym",
    description: "jog a mile",
    completed: false,
  },
  {
    id: 3,
    title: "Take a nap",
    description: "your description",
    completed: false,
  },
];
const user = {
  name: "Nakisha Carroll",
  avatar: avatar,
};
function App() {
  return (
    <div>
      <nav>
        <p>
          {user.name}
        </p>
        <img alt="cat" src={user.avatar}></img>
        
        <h1>To Do List</h1>
        <ul>
          {todoList.map((todo) =>{
            return (

              <h3>{todo.description}
              {todo.title}</h3>
            )
          }
          )}
          <li>To Do</li>
          <li>Dashboard</li>
          <li>Games</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import avatar from "./image/profile.png";
import Todo from "./Todo";
import Nav from "./Nav";

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
    <>
      <Nav user={user}/>
      <div>
        {todoList.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
    </>
  );
}
export default App;

const styles = {
  todoList: {
    textAlign: "center",
    display: "flex",
    flexDirection: "columns",
    alignItems: "center",
  },
  h1: {
    color: "blue",
    fontWeight: "bold",
    background: "pink",
  },
  listItemStyles: {
    padding: "1 rem",
    margin: "1 rem",
    borderRadius: "4rem",
    border: "box",
  },
};

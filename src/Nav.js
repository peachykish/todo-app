import React from "react";
import avatar from "./image/profile.png";

const user = {
  name: "Nakisha Carroll",
  avatar: avatar,
};

function Nav(props) {
  return (
    <nav>
      <p>{user.name}</p>
      <img alt="cat" src={user.avatar}></img>
      <h1 style={styles.h1}>To Do List</h1>
    </nav>
  );
}

export default Nav;
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

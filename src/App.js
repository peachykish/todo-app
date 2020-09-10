import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>To Do Today</h1>
      <input type="text"></input>
      <button> Add Item</button>
        <ul>
          <li>Go to the store</li>
          <li>Do Laundry</li>
          <li>Go to the gym</li>
          <li>Take a nap</li> 
        </ul>
        <nav>
          <img alt="cat" src="./profile.png"/>
          <ul>
          <li>To Do</li>
          <li>Dashboard</li>
          <li>Games</li>
          </ul>
        </nav>
    </div>
  );
}

export default App;

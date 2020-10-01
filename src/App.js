import React from "react";
import "./App.css";
import Todo from "./Todo";
import Nav from "./Nav";
import shortid from "shortid";
const TODOS_KEY = "myapp_todos";
class App extends React.Component {
  state = {
    todoList: [
      {
        id: shortid.generate(),
        name: "Item 1",
        description: "Test description",
        completed: false,
      },
    ],
    newTodo: "",
  };
  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };
  componentDidMount() {
    const todoString = localStorage.getItem(TODOS_KEY);
    if (todoString) {
      this.setState({ todoList: JSON.parse(todoString) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.state.todoList) {
      localStorage.setItem(TODOS_KEY, JSON.stringify(this.state.todoList));
    }
  }
  handleAddNewTodo = () => {
    let newTodoObject = {
      id: shortid.generate(),
      name: this.state.newTodo,
      description: "",
      completed: false,
    };
    this.setState((state) => ({
      todoList: [...state.todoList, newTodoObject],
      newTodoObject: "",
    }));
  };

  handleCheckInput = (id) => {
    this.setState((state) => {
      const newList = state.todoList.map((item) => {
        if (item.id === id) {
          return Object.assign({}, item, { completed: true });
        } else {
          return item;
        }
      });
      return {
        todoList: newList,
      };
    });
  };

  handleDelete = (id) => {
    this.setState((state) => {
      let newList = state.todoList.filter((item) => {
        if (item.id === id) {
          return item.id !== id;
        } else {
          return item;
        }
      });
      return {
        todoList: newList
      }
    })
  }
  render() {
    return (
      <>
        <Nav />
        <Todo
          todoList={this.state.todoList}
          checkItem={this.handleCheckInput}
          deleteItem={this.handleDelete}
        />
        <div>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleAddNewTodo}>Add New</button>
        </div>
      </>
    );
  }
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

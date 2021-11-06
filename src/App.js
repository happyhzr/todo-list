import React from "react";
import axios from "axios";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: []
    }
    this.addTodoItem = this.addTodoItem.bind(this)
    this.deleteTodoItem = this.deleteTodoItem.bind(this)
  }

  componentDidMount() {
    axios.get("http://localhost:8000/items")
      .then((res) => {
        this.setState({ todoItems: res.data })
      })
  }

  addTodoItem(todoItemValue) {
    const newTodoItem = {
      id: this.state.todoItems.length,
      value: todoItemValue,
      isDone: false,
      isDelete: false,
    }
    axios.post("http://localhost:8000/items", { todoItem: newTodoItem })
      .then((res) => {
        console.log(res.data)
        this.setState({
          todoItems: res.data
        })
      })
  }

  deleteTodoItem(item) {
    axios.delete("http://localhost:8000/items", { data: { id: item.id } })
      .then((res) => {
        this.setState({
          todoItems: res.data
        })
      })
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <TodoForm addTodoItem={this.addTodoItem}></TodoForm>
        <TodoList todoItems={this.state.todoItems} deleteTodoItem={this.deleteTodoItem} />
      </div>
    )
  }
}

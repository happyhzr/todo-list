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
    fetch("http://localhost:8000/items")
      .then(resp => resp.json())
      .then(json => {
        this.setState({ todoItems: json })
      })
  }

  addTodoItem(todoItemValue) {
    const newTodoItem = {
      id: this.state.todoItems.length,
      value: todoItemValue,
      isDone: false,
      isDelete: false,
    }
    fetch("http://localhost:8000/items", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newTodoItem)
    })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          todoItems: json,
        })
      })
  }

  deleteTodoItem(item) {
    fetch("http://localhost:8000/items", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({id:item.id})
    })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          todoItems: json,
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

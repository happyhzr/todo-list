import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: [
        { id: 0, value: "React", isDone: false, isSelete: false },
      ]
    }
    this.addTodoItem = this.addTodoItem.bind(this)
    this.deleteTodoItem = this.deleteTodoItem.bind(this)
  }

  addTodoItem(todoItemValue) {
    const newTodoItem = {
      id: this.state.todoItems.length,
      value: todoItemValue,
      isDone: false,
      isDelete: false,
    }
    this.setState({
      todoItems: [...this.state.todoItems, newTodoItem]
    })
  }

  deleteTodoItem(item) {
    item.isDelete = true
    this.setState({
      todoItems: [...this.state.todoItems, item]
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

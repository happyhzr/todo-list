import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: [
        { id: 0, value: "React", isDone: false, isSelete: false },
      ]
    }
    this.inputRef = React.createRef()
    this.addTodoItem = this.addTodoItem.bind(this)
  }

  addTodoItem() {
    const newTodoItem = {
      id: this.state.todoItems.length,
      value: this.inputRef.current.value,
      isDone: false,
      isDelete: false,
    }
    this.setState({
      todoItems: [...this.state.todoItems, newTodoItem]
    })
    this.inputRef.current.value = ""
  }

  deleteTodoItem(item) {
    return () => {
      item.isDelete = true
      this.setState({
        todoItems: [...this.state.todoItems, item]
      })
    }
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <div>
          <input type="text" placeholder="add something..." ref={this.inputRef} />
          <button type="submit" onClick={this.addTodoItem}>add</button>
        </div>
        <ul>
          {
            this.state.todoItems.map((item) => {
              if (!item.isDelete) {
                return (
                  <li key={item.id}>
                    <label>{item.value}</label>
                    <button onClick={this.deleteTodoItem(item)}>delete</button>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    )
  }
}

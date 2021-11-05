import React from "react";

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.todoItemRef = React.createRef()
        this.addTodoItem = this.addTodoItem.bind(this)
    }

    addTodoItem() {
        this.props.addTodoItem(this.todoItemRef.current.value)
        this.todoItemRef.current.value = ""
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.todoItemRef} placeholder="add or search something..." />
                <button type="submit" onClick={this.addTodoItem}>add</button>
            </div>
        )
    }
}
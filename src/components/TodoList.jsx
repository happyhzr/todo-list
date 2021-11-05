import React from "react";

import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.deleteTodoItem = this.deleteTodoItem.bind(this)
    }

    deleteTodoItem(item) {
        this.props.deleteTodoItem(item)
    }

    render() {
        return (
            <ul>
                {
                    this.props.todoItems.map((item) => {
                        if (!item.isDelete) {
                            return <TodoListItem key={item.id} item={item} deleteTodoItem={this.deleteTodoItem} />
                        }
                    })
                }
            </ul>
        )
    }
}
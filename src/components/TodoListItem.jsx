import React from "react";

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.deleteTodoItem = this.deleteTodoItem.bind(this)
    }

    deleteTodoItem() {
        this.props.deleteTodoItem(this.props.item)
    }

    render() {
        return (
            <div>
                <li>
                    <label>{this.props.item.value}</label>
                    <button onClick={this.deleteTodoItem}>delete</button>
                </li>
            </div>
        )
    }
}
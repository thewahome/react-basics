import React from 'react'

export default function Todos({ todos, deleteTodo }) {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item">
                    <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p>
                <div className="center">You have no todos left</div>
            </p>
        )
    return (
        <div className="todos collection">{todoList}</div>
    )

}

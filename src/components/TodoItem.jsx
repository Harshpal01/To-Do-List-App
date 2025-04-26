import React from "react";

function TodoItem({ task, toggleTask, deleteTask }) {
    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span
                className="task-text"
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "blue" : "white",
                }}
            >
                {task.text}
            </span>
            <button className="delete-button" onClick={() => deleteTask(task.id)}>
                🗑
            </button>
        </li>
    );
}

export default TodoItem;

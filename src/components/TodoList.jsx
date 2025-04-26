import React from "react";
import { ListGroup, Button, Badge } from "react-bootstrap";
import { FaTrash } from "react-icons/fa"; // Icon for delete

function TodoList({ tasks, toggleTask, deleteTask }) {
    return (
        <ListGroup>
            {tasks.map((task) => (
                <ListGroup.Item
                    key={task.id}
                    className="d-flex justify-content-between align-items-center"
                    style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        color: task.completed ? "#0d6efd" : "#000", // blue when done
                    }}
                >
                    <span onClick={() => toggleTask(task.id)} style={{ cursor: "pointer" }}>
                        {task.text}
                    </span>
                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                    >
                        <FaTrash />
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default TodoList;

import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function TodoForm({ addTask }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-3">
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Add a new task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="primary" type="submit" style={{ backgroundColor: "#20412E", border: "none" }}>
                    Add
                </Button>
            </InputGroup>
        </Form>
    );
}

export default TodoForm;

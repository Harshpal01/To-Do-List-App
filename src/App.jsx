import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container className="py-5">
      {/* Title */}
      <Row className="justify-content-center">
        <Col xs="auto" className="d-flex align-items-center">
          <h1 className="title">
            <span className="secondary">My </span>
            <span className="primary">TO-DO LIST</span>
          </h1>
        </Col>
      </Row>

      {/* Input and Add Button */}
      <Row className="justify-content-center my-4">
        <Col xs={10} md={6}>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Add a new task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="me-2"
            />
            <Button variant="primary" onClick={addTask}>
              Add
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Task List */}
      <Row className="justify-content-center">
        <Col xs={10} md={6}>
          <Card className="p-3 shadow-sm">
            {tasks.length > 0 ? (
              <Table responsive borderless>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.text}</td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div className="text-center">No tasks added yet.</div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

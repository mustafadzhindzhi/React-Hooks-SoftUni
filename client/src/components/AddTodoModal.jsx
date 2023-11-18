import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { useForm } from "../hooks/useForm.jsx";

export const AddTodoModal = ({
    show,
    onTodoAddSubmit,
    onTodoAddClose
}) => {
  const { formValues, onChangeHandler, onSubmit } = useForm({text: "",},onTodoAddSubmit);

  return (
    <Modal show={show} onEscapeKeyDown={onTodoAddClose} onBlur={onTodoAddClose}>
      <Modal.Header closeButton onHide={onTodoAddClose}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              name="text"
              placeholder="Do the dishes"
              value={formValues.name}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginRight: "10px" }}
          >
            Submit
          </Button>
          <Button variant="secondary" onClick={onTodoAddClose}>Close</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

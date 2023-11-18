import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { useForm } from "../hooks/useForm.jsx";

export const AddTodoModal = ({
    onTodoAdd,
}) => {
  const { formValues, onChangeHandler, onSubmit } = useForm({text: "",},onTodoAdd);

  return (
    <Modal show={true}>
      <Modal.Header closeButton>
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
          <Button variant="secondary">Close</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

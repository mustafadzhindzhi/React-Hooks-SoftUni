import { ListGroup, Button } from "react-bootstrap";

export const Todoitem = ({ _id, text, isCompleted, onTodoDeleteClick }) => {
  return (
    <ListGroup.Item action style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>{text}</div>
      <div>
        <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
      </div>
    </ListGroup.Item>
  );
};

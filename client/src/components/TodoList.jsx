import { ListGroup } from "react-bootstrap";
import { Todoitem } from "./TodoItem.jsx";

export const TodoList = ({ todos }) => {
  return (
    <div style={{ width: "50%", margin: "10px auto" }}>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <ListGroup>
        {todos.map((x) => (
          <Todoitem key={x._id} {...x} />
        ))}
      </ListGroup>
    </div>
  );
};

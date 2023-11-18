import { ListGroup } from "react-bootstrap";
import { Todoitem } from "./TodoItem.jsx";

import {Button} from "react-bootstrap";

export const TodoList = ({ todos }) => {
  return (
    <div style={{ width: "50%", margin: "10px auto" }}>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <ListGroup style={{marginBottom: '10px'}}>
        {todos.map((x) => ( <Todoitem key={x._id} {...x} /> ))}
      </ListGroup>

      <Button type="button" className="btn btn-primary">Add</Button>
    </div>
  );
};

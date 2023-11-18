import { ListGroup, Button } from "react-bootstrap";

import { Todoitem } from "./TodoItem.jsx";

export const TodoList = ({ todos, onTodoAddClick, onTodoDeleteClick }) => {
  return (
    <div style={{ width: "50%", margin: "10px auto" }}>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>

      <ListGroup style={{marginBottom: '10px'}}>
        {todos.map(x =>  <Todoitem key={x._id} {...x} onTodoDeleteClick={onTodoDeleteClick}/> )}
      </ListGroup>

      <Button className="btn btn-primary" onClick={onTodoAddClick}>Add</Button>
    </div>
  );
};

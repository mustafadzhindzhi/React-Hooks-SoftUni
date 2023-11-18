import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext.jsx";

import { ListGroup, Button } from "react-bootstrap";

export const Todoitem = ({ _id, text, isCompleted }) => {
    const {onTodoDeleteClick, onTodoClick} = useContext(TodoContext);
    
  return (
    <ListGroup.Item action style={{ display: 'flex', justifyContent: 'space-between' }} onClick={() => onTodoClick(_id)}>
         <p style={{textDecoration: isCompleted ? 'line-through' : 'none'}} >{text}</p>
        <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
      
    </ListGroup.Item>
  );
};

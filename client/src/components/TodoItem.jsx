import { ListGroup } from "react-bootstrap"

export const Todoitem = ({
    text, 
    isCompleted
}) => {
    return(
        <ListGroup.Item action>
        {text}
        </ListGroup.Item>
    )
}
import { useState, useEffect } from "react";

import { Header } from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoList } from "./components/TodoList.jsx";
import { AddTodoModal } from "./components/AddTodoModal.jsx";

const baseUrl = "http://localhost:3030/jsonstore/todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(result => {
      setTodos(Object.values(result));
    })
  }, []);

  const onTodoAdd = async(values) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(values)
    });

    const result = await response.json();
    console.log(result);
  }

  return (
    <>
      <Header />
      <TodoList todos={todos} />

      <AddTodoModal onTodoAdd={onTodoAdd}/>
    </>
  );
}

export default App;

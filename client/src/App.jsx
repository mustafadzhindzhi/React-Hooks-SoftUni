import { useState, useEffect } from "react";

import { Header } from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoList } from "./components/TodoList.jsx";

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

  return (
    <>
      <Header />
      <TodoList todos={todos} />
    </>
  );
}

export default App;

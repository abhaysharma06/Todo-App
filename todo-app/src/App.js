import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import EditComment from "./components/EditComment";
import Search from "./components/Search";
import Heading from "./components/Heading";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    filterData(todos);
  }, [todos]);

  const [displayTodo, setDisplayToo] = useState([]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const filterData = (input) => {
    setDisplayToo(
      todos.filter((todo) => todo.body.toLowerCase().includes(input))
    );
  };

  return (
    <VStack p={4}>
      <Switch>
        <Route path="/" exact>
          <Heading />
          <Search todos={todos} filterData={filterData} />
          <TodoList todos={displayTodo} deleteTodo={deleteTodo} />
          <AddTodo addTodo={addTodo} />
        </Route>
        <Route path="/edit-comments">
          <Heading />
          <EditComment todos={todos} />
        </Route>
      </Switch>
    </VStack>
  );
}

export default App;

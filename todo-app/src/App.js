import React from "react";
import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import EditComment from "./components/EditComment";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const [displayTodo, setDisplayTodo] = useState([]);
  const [editTodo, seteditTodo] = useState(false);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const filterData = (input) => {
    setDisplayTodo(
      todos.filter((todo) => todo.body.toLowerCase().includes(input))
    );
  };

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  const editComment = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const selectedItem = todos.find((todo) => todo.id === id);
    seteditTodo({
      todos: newTodos,
      todo: selectedItem.body,
      id: id,
      editTodo: true,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    filterData(todos);
  }, [todos]);

  return (
    <VStack p={4}>
      <Switch>
        <Route path="/" exact>
          <Heading />
          <Search todos={todos} filterData={filterData} />
          <TodoList
            todos={displayTodo}
            deleteTodo={deleteTodo}
            editComment={editComment}
          />
          <AddTodo addTodo={addTodo} />
        </Route>
        <Route path="/edit-comments">
          <Heading />
          <EditComment editComment={editTodo} addTodo={addTodo} />
        </Route>
      </Switch>
    </VStack>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState(" ");

  const addTodo = () => {
    const trimText = text.trim();
    if (trimText.length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          complited: false,
          text,
        },
      ]);
    }
    setText("");
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleChecked = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, complited: !todo.complited } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <InputField text={text} setText={setText} addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleChecked={toggleChecked}
        removeTodo={removeTodo}
      />
    </div>
  );
}

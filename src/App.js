import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { addTodo } from "./store/todoSlice";

export default function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodoItem = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <Header />
      <InputField text={text} setText={setText} addTodoItem={addTodoItem} />
      <TodoList />
    </div>
  );
}

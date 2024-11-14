import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, actions) {
      state.todos.push({
        id: new Date().toISOString(),
        complited: false,
        text: actions.payload.text,
      });
    },

    removeTodo(state, actions) {
      state.todos = state.todos.filter(
        (todo) => todo.id !== actions.payload.id
      );
    },

    toggleComplitedTodo(state, actions) {
      const targetTodo = state.todos.find(
        (todo) => todo.id === actions.payload.id
      );
      targetTodo.complited = !targetTodo.complited;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, toggleComplitedTodo } = todoSlice.actions;

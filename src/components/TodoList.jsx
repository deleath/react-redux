import ListItem from "./ListItem";

const TodoList = ({ todos, toggleChecked, removeTodo, ...props }) => {
  return (
    <ul className="text-center">
      {todos.map((todo) => (
        <ListItem
          todo={todo}
          removeTodo={removeTodo}
          toggleChecked={toggleChecked}
        />
      ))}
    </ul>
  );
};

export default TodoList;

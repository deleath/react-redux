import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const TodoList = ({ ...props }) => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul className="text-center">
      {todos.map((todo) => (
        <ListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;

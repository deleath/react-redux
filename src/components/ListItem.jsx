import { useDispatch } from "react-redux";
import { toggleComplitedTodo, removeTodo } from "../store/todoSlice";

const ListItem = ({ id, text, complited, ...props }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={complited}
        onChange={() => dispatch(toggleComplitedTodo({ id }))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))} className="delIcon">
        &times;
      </span>
    </li>
  );
};

export default ListItem;

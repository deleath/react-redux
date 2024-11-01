const ListItem = ({ todo, removeTodo, toggleChecked, ...props }) => {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.complited}
        onChange={() => toggleChecked(todo.id)}
      />
      <span>{todo.text}</span>
      <span onClick={() => removeTodo(todo.id)} className="delIcon">
        &times;
      </span>
    </li>
  );
};

export default ListItem;

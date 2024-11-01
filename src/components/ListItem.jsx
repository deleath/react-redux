const ListItem = ({ todo, removeTodo, toggleChecked, ...props }) => {
  return (
    <li key={todo.id}>
      <input type="checkbox" unchecked onClick={() => toggleChecked(todo.id)} />
      {todo.complited ? (
        <span style={{ color: "green" }}>{todo.text}</span>
      ) : (
        <span style={{ color: "red" }}>{todo.text}</span>
      )}
      <span onClick={() => removeTodo(todo.id)} className="delIcon">
        &times;
      </span>
    </li>
  );
};

export default ListItem;

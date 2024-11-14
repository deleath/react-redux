const InputField = ({ text, setText, addTodoItem, ...props }) => {
  return (
    <label className="mt-3">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodoItem}>Добавить</button>
    </label>
  );
};

export default InputField;

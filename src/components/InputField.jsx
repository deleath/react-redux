const InputField = ({ text, setText, addTodo, ...props }) => {
  return (
    <label className="mt-3">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTodo()}>Добавить</button>
    </label>
  );
};

export default InputField;

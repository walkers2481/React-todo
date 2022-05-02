const style = {
  borderRadius: "8px",
  margin: "10px auto 0px",
  width: "calc(100% - 40px)",
  maxWidth: "600px",
  outline: "none",
  backgroundColor: "rgba(100, 240, 240, 0.4)",
  userSelect: "none"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick /*disabled*/ } = props;
  return (
    <section style={style}>
      <div className="container">
        <input
          /*disabled={disabled}*/
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
        />
        <button /*disabled={disabled}*/ onClick={onClick}>追加</button>　
      </div>
    </section>
  );
};

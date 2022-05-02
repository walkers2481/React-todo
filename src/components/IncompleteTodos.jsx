export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <section className="unfinished">
      <div className="container">
        <h3>未完了のTODO</h3>
        <ul>
          {todos.map((todoName, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todoName}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

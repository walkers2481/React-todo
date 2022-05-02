export const CompleteTodos = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <section className="finished">
      <div className="container">
        <h3>完了したTODO</h3>
        <ul>
          {todos.map((todoName, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todoName}</li>
                <button onClick={() => onClickReturn(index)}>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

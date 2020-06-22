import React from "react";

const mytodo = ({ todos, deleteTodo }) => {
  const todoList = todos.map((book) => {
    return (
      <div
        onClick={() => {
          deleteTodo(book.id);
        }}
        className="collection-item center"
        key={book.id}
      >
        <h5>{book.title}</h5>
        <p>{book.author}</p>
      </div>
    );
  });

  return <div className="collection">{todoList}</div>;
};

export default mytodo;

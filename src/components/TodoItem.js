import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { item, deleteTodo } = props;

  return (
    <div className="todo-item">
      <p className="todo-item-text">{ item.text }</p>
        <button className="todo-item-delete" onClick={ () => deleteTodo(item) }>-</button>
    </div>
  );
};

export default TodoItem;
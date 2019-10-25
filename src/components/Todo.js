import React, { useState } from 'react';
import './Todo.css';
import Logo from '../assets/logo.svg';
import TodoItem from './TodoItem'

const Todo = () => {
  const [list, setList] = useState([
    { id: 1, text: "clean up the house" },
    { id: 2, text: "buy milk" }
  ]);
  const [todo, setTodo] = useState("");

  const generateNewID = () => {
    if (list && list.length > 1) {
      return Math.max(...list.map((item) => item.id)) + 1;
    } else {
      return 1;
    }
  };

  const createNewTodoItem = () => {
    if (!todo) {
      alert("Please enter a todo!");
      return;
    }

    const newID = generateNewID();
    const newTodo = {id: newID, text: todo};
    setList([...list, newTodo]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value)
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewTodoItem();
    }
  };

  const deleteTodo = (todo) => {
    setList(list.filter((item) => item !== todo ));
  };

  return (
    <div className="todo">
      <img className="logo" src={Logo} alt="React logo" />
      <h1 className="todo-header">React To Do</h1>
      <h3 className="todo-subheader">with Hooks!</h3>
      <div className="todo-input">
        <input type="text" value={ todo } placeholder="New todo" onChange={ handleChange } onKeyPress={ handleKeyPress } />
        <button className="todo-add" onClick={ createNewTodoItem }>+</button>
      </div>
      <div className="todo-container">
        <div className="todo-content">
          { list.map((item) => {return <TodoItem key={ item.id } item={ item } deleteTodo={ deleteTodo } /> }) }
        </div>
      </div>
    </div>
  )
}

export default Todo;
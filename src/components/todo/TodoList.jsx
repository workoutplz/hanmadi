import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import styles from './Todo.module.css';
import { TiDelete } from "react-icons/ti";

function TodoList() {
  const storedTodos = localStorage.getItem('todos');
  const [todos, setTodos] = useState(storedTodos ? JSON.parse(storedTodos) : []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <ul className={styles.todoUl}>
        {todos && todos.map((todo) => (
          <li className={styles.todoItem} key={todo.id}>
            <span>{todo.text}</span>
            <button className={styles.deleteButton} onClick={()=>deleteTodo(todo.id)}><TiDelete size="24"/></button>
          </li>
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default TodoList;
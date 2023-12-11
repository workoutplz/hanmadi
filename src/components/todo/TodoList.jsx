import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import styles from './Todo.module.css';
import { TiDelete } from "react-icons/ti";
import { motion } from "framer-motion";

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
  const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.ul variants={list} animate="visible" initial="hidden" className={styles.todoUl}>
        {todos && todos.map((todo) => (
          <motion.li variants={item}className={styles.todoItem} key={todo.id}>
            <span>{todo.text}</span>
            <button className={styles.deleteButton} onClick={()=>deleteTodo(todo.id)}><TiDelete size="24"/></button>
          </motion.li>
        ))}
      </motion.ul>
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default TodoList;
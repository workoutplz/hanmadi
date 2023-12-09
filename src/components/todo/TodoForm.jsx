import React, { useState } from 'react'
import styles from './Todo.module.css'

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input placeholder="오늘 할 일을 입력해주세요." className={styles.todoInput} type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </form>
  )
}

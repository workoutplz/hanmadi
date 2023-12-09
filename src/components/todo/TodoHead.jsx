import React from 'react'
import styles from './Todo.module.css'

export default function TodoHead() {;
  const today = new Date();
  const date = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={styles.todoHead}>
      <h1>{date}</h1>
    </div>
  )
}
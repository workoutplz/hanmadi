import React from 'react'
import styles from './Todo.module.css'

export default function TodoTemplate({ children }) {

  return (
    <div className={styles.todoTemplate}>
      {children}
    </div>
  )
}
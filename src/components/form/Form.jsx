import React from 'react'
import styles from './Form.module.css';

export default function Form({ handleChange, handleSubmit }) {
  return (
    <form className={styles.nameForm} onSubmit={handleSubmit}>
      <h2 className={styles.question}>당신의 이름은 무엇인가요?</h2>
      <input type="text" onChange={handleChange} className={styles.nameInput} placeholder="이름을 입력해주세요."/>
    </form>
  );
}

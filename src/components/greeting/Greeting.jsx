import React from 'react';
import styles from './Greeting.module.css';

export default function Greeting({ name }) {
  return (
    <h2 className={styles.greeting}>오늘, {name} 너에게 전하고 싶은 한마디</h2>
  );
}

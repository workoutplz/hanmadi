import React from 'react';
import styles from './Calligraphy.module.css';

export default function Calligraphy({ path }) {
  return (
    <img src={path} className={styles.calligraphy} alt="캘리그래피"/>
  )
}
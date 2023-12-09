import React from 'react';
import styles from './FloatingButton.module.css';

export default function FloatingButton({ handleClick, Icon, place }) {
  return (
    <button onClick={handleClick} className={styles[place]}>
      <Icon size="50"/>
    </button>
  )
}

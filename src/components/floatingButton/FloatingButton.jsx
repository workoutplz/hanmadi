import React from 'react';
import styles from './FloatingButton.module.css';
import { GrPowerReset } from "react-icons/gr";
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip';

export default function FloatingButton() {
  const handleClick = e => {
    localStorage.clear();
    window.location.reload();
  }
  
  return (
    <div
      data-tooltip-id="reset"
      data-tooltip-content="이름 재설정"
      className={styles.floatingButton}
    >
      <Tooltip id="reset"/>
      <motion.button
        onClick={handleClick}
        className={styles.floatingButton}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <GrPowerReset size="50"/>
      </motion.button>
    </div>
    
  )
}

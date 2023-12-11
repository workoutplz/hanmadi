import React from 'react';
import styles from './Calligraphy.module.css';
import { motion } from "framer-motion";

export default function Calligraphy({ path }) {
  return (
    <motion.img
      src={path}
      className={styles.calligraphy}
      alt="캘리그래피"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", sniffness: 400, damping: 10 }}
    />
  )
}
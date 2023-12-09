import React from 'react'
import styles from './Search.module.css'
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <form className={styles.searchBox} action='https://www.google.com/search' method='GET'>
      <CiSearch className={styles.searchIcon} size="24"/>
      <input type="text" name='q' className={styles.search} placeholder="구글 검색"/>
    </form>
  )
}

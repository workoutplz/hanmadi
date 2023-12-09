import React from 'react'
import styles from './Card.module.css'
import YouTube from 'react-youtube'

export default function Card({youtubeId, description, title}) {
  const opts = {
    height: '40%',
    width: '90%',
    playerVars: {
    autoplay: 0,
    },
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardYoutube}>
        <YouTube videoId={youtubeId} opts={opts} />
      </div>
      <div className={styles.cardDescription}>{description}</div>    
    </div>
  )
}

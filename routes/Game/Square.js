import React from 'react'
import styles from './game.scss'

export const Square = (props) =>
  <button className={styles.square} onClick={() => props.onClick()}>
    {props.value}
  </button>

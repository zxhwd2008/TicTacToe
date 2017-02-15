import React from 'react'
import styles from './game.scss'

export const Player = (props) =>
  <div className="form-group">
    <label htmlFor={props.componentID}>{props.label}</label>
    <input type="text" id={props.componentID} className="form-control"
    placeholder={props.placeholder} onChange={ (e) => {props.onChange(e.target.value)}}/>
  </div>

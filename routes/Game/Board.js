import React from 'react'
import { Square } from './Square'
import styles from './game.scss'

export const Board = (props) =>
  <div>
    <div className={styles['game-info']}>
      Next Player: { props.player1IsNext ? props.players[0].name
        : props.players[1].name }
    </div>
    <div className={styles['board-row']}>
      <Square onClick={() => { props.onClick(0) }} value={props.squares[0]} />
      <Square onClick={() => { props.onClick(1) }} value={props.squares[1]} />
      <Square onClick={() => { props.onClick(2) }} value={props.squares[2]} />
    </div>
    <div className={styles['board-row']}>
      <Square onClick={() => { props.onClick(3) }} value={props.squares[3]} />
      <Square onClick={() => { props.onClick(4) }} value={props.squares[4]} />
      <Square onClick={() => { props.onClick(5) }} value={props.squares[5]} />
    </div>
    <div className={styles['board-row']}>
      <Square onClick={() => { props.onClick(6) }} value={props.squares[6]} />
      <Square onClick={() => { props.onClick(7) }} value={props.squares[7]} />
      <Square onClick={() => { props.onClick(8) }} value={props.squares[8]} />
    </div>
  </div>

Board.propTypes = {
  player1IsNext: React.PropTypes.bool,
  players: React.PropTypes.array,
  squares: React.PropTypes.array,
  onClick: React.PropTypes.func,
}

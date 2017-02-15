import React from 'react'
import classnames from 'classnames'
import { Player } from './Player'
import { Board } from './Board'
import styles from './game.scss'

export class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      steps: 9,
      squares: Array(9).fill(null),
      player1Name: null,
      player2Name: null,
      player1IsNext: true,
    };
  }

  updateState(field, value) {
    this.setState({[field]: value})
  }

  gameOver(winner = null) {
    this.props.updateField('players', [
      {
        name: this.props.players[0].name,
        points: winner === 'X'
        ? ++this.props.players[0].points
        : this.props.players[0].points,
      },
      {
        name: this.props.players[1].name,
        points: winner === 'O'
        ? ++this.props.players[1].points
        : this.props.players[1].points,
      }
    ])
    if (winner === 'X') {
      this.props.updateField('winner', 0)
    }
    else if (winner === 'O') {
      this.props.updateField('winner', 1)
    } else {
      this.props.updateField('winner', -1)
    }
    this.props.gameOver()
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handlePlayerNames() {
    this.props.updateField('players', [
      {
        name: this.state.player1Name,
        points: 0,
      },
      {
        name: this.state.player2Name,
        points: 0,
      }
    ])
  }

  handlePlayerNameChange(field, value) {
    this.updateState(field, value)
  }

  handleSquareClick(key) {
    const squares = this.state.squares.slice();
    if (!squares[key]) {
      squares[key] = this.state.player1IsNext ? 'X' : 'O'
      this.updateState('squares', squares)
      this.updateState('steps', --this.state.steps)
      const winner = this.calculateWinner(squares)
      if (winner) {
        this.gameOver(winner)
      }
      else if (this.state.steps === 0) {
        this.gameOver()
      }
      else {
        this.updateState('player1IsNext', this.state.player1IsNext ? false: true)
      }
    }
  }

  render() {
    return (
      <div className={classnames('container', styles.game)}>
        <div className="row">
          {this.props.players && this.props.players.length === 0 ?
            <div>
              <Player
                label="Player 1"
                componentID="Player1"
                placeholder="Player 1"
                onChange={(value) => {this.handlePlayerNameChange('player1Name', value)}}
              />
              <Player label="Player 2" componentID="Player2" placeholder="Player 2"
                onChange={(value) => {this.handlePlayerNameChange('player2Name', value)}}/>
              <div className="text-center">
                <button className="btn btn-lg btn-primary"
                  disabled={!this.state.player1Name || !this.state.player2Name}
                  onClick={() => {this.handlePlayerNames()}}>Next</button>
              </div>
            </div>
          : <Board
              squares={this.state.squares}
              onClick={ (key) => { this.handleSquareClick(key) }}
              players={ this.props.players}
              player1IsNext={this.state.player1IsNext}/>}
        </div>
      </div>
    )
  }
}

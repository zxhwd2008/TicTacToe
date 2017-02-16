import React from 'react'
import classnames from 'classnames'
import { IndexLink } from 'react-router'
import styles from './leader-board.scss'

export class LeaderBoard extends React.Component {
  componentWillUnmount() {
    this.props.updateField('winner', null)
  }

  render() {
    let result = null
    if (this.props.winner && this.props.winner === -1) {
      result = 'Tie Game'
    } else if (this.props.players && this.props.winner !== null && this.props.winner !== -1) {
      result = 'Player ' + this.props.players[this.props.winner].name + ' Won'
    }
    return (
      <div className={classnames('container', styles.board)}>
        <div className="row">
          {result ?
            <h1 className="text-center">
              { result }
            </h1> : ''
          }
          <div className="col-sm-3 col-sm-offset-3 col-xs-6 text-center">
            <h2>
              Player
            </h2>
            <h3>
              { this.props.players && this.props.players.length === 2
                && this.props.players[0].name }
            </h3>
            <h3>
              { this.props.players && this.props.players.length === 2
                && this.props.players[1].name }
            </h3>
          </div>
          <div className="col-sm-3 col-xs-6 text-center">
            <h2>
              Points
            </h2>
            <h3>
              { this.props.players && this.props.players.length === 2
                && this.props.players[0].points }
            </h3>
            <h3>
              { this.props.players && this.props.players.length === 2
                && this.props.players[1].points }
            </h3>
          </div>
          <div className={classnames('text-center', styles['back-button'])}>
            <IndexLink to="/">
              <button className="btn btn-lg btn-primary">Back To Menu</button>
            </IndexLink>
          </div>
        </div>
      </div>
    )
  }
}

LeaderBoard.propTypes = {
  updateField: React.PropTypes.func,
  winner: React.PropTypes.number,
  players: React.PropTypes.array,
}

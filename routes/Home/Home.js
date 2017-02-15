import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'
import styles from './home.scss'

export const Home = () =>
  <div className={classnames('container', styles.home)}>
    <div className="row">
      <div className="col-sm-12">
        <h1 className="text-center">TicTacToe</h1>
        <div className={styles['sidebar-nav']}>
          <div
            className={
              classnames('navbar-collapse',
              'sidebar-navbar-collapse',
              styles['navbar-collapse'])
            }
          >
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/game">
                  NEW GAME
                </Link>
              </li>
              <li>
                <Link to="/board">
                  LeaderBoard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

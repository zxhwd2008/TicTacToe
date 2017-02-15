import React from 'react'
import { Link, IndexLink } from 'react-router'
import classnames from 'classnames'
import styles from './header.scss'

export const Header = () =>
  <header className="clearfix">
    <nav className="navbar navbar-default navbar-static-top">
      <div className="navbar-header">
        <IndexLink to="/" className="navbar-brand">
          <span className="brand-title">
            TicTacToe
          </span>
        </IndexLink>
      </div>
      <div className="navbar-collapse collapse pull-right">
        <ul className="nav navbar-nav">
          <li>
            <a
              href="https://github.com/zxhwd2008"
              target="_blank">
              Created by Xiaohang Zou
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

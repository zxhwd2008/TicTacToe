import React from 'react'
import classnames from 'classnames'
import styles from './footer.scss'

export const Footer = () =>
  <footer className={styles.footer}>
    <div className="container">
      <p className={classnames(styles['text-muted'], 'text-center')}>
        ©{new Date().getFullYear()} Xiaohang Zou
      </p>
    </div>
  </footer>

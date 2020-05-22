import React from 'react'
import styles from './HeaderTable.module.scss'
import { ReactComponent as dollarSVG } from './dollar.svg'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const HeaderTable = () => {
  return (<div className={styles.balance}>
    <div className={styles.title}>
      my Balance
    </div>
    <div className={styles.money}>
      <span className={styles.moneyIcon}>{dollarSVG.render()}</span>
      <span className={styles.moneyMain}>708</span>
      <span className={styles.moneyOther}>,83</span>
    </div>
    <Link to='/makeupdeposit' className={styles.button}>
      Make up deposit
    </Link>
  </div>)
}

export default HeaderTable

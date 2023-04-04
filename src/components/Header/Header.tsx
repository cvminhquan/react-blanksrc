import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/img/logo.png'

const Header: React.FC = (props) => {
  return (
    <div className={styles['root']}>
      <div className={styles.mainHeader}>
        <div className='container'>
          <div>
            <img className={styles.logo} src={logo} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/img/wood-logo-dark.svg'
import classNames from 'classnames'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'
import TopBar from './TopBar/TopBar'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { GiDeadWood } from 'react-icons/gi'
const Header: React.FC = (props) => {

  return (
    <div className={styles['root']}>
      <TopBar />
      <div className={styles.mainHeader}>
        <div className='container'>
          <div className={classNames(styles.center, 'row')}>
            <div className='col-xs-12 col-sm-12 col-md-3'>
              <Link to='/' className='d-flex align-items-center'>
                <GiDeadWood color='black' size={35} />
                <span className={styles.logo}>
                  <span className={styles.mainLogo}>F</span>
                  unimart
                </span>
                {/* <img className={styles.logo} src={logo} alt='' /> */}
              </Link>
            </div>
            <div className='col-xs-12 col-sm-12 col-lg-6'>
              <div className={styles.search}>
                <Search />
              </div>
            </div>
            <div className={classNames('col-xs-12 col-sm-12 col-md-3 animate-dropdown', styles['header-right'])}>
              <div className={styles['header-account']}>Login/Register</div>
              <div className='whishlist'>
                <Link to='/'>
                  <FiHeart size={24} color='black' />
                </Link>
              </div>
              <div className='cart'>
                <Link to='/'>
                  <FiShoppingCart size={24} color='black' />
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header

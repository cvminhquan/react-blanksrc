import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/img/wood-logo-dark.svg'
import classNames from 'classnames'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'
import TopBar from './TopBar/TopBar'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { GiDeadWood, GiHamburgerMenu } from 'react-icons/gi'
import Login from '~/pages/Login/Login'
const Header: React.FC = (props) => {

  return (
    <div className={styles['root']}>
      <TopBar />
      <div className={styles.mainHeader}>
        <div className='container'>
          <div className={classNames(styles.center, 'row')}>
            <div className="col d-block d-sm-none">
              <Link to=""><GiHamburgerMenu size={30} color='black' /></Link>
            </div>
            <div className='col col-md-3'>
              <Link to='/' className='d-flex align-items-center'>
                <GiDeadWood color='black' size={35} />
                <span className={styles.logo}>
                  <span className={styles.mainLogo}>F</span>
                  unimart
                </span>
                {/* <img className={styles.logo} src={logo} alt='' /> */}
              </Link>
            </div>
            <div className='col d-none d-sm-block col-lg-6'>
              <div className={styles.search}>
                <Search />
              </div>
            </div>
            <div className={classNames('col col-md-3 animate-dropdown', styles['header-right'])}>
              <div className={styles['header-account']}>
                <Link to="login">Login/Register</Link>
              </div>
              <div className={styles.whishlist}>
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
      <div className={styles.headerBottom}>
        <div className={classNames("container-fluid d-none d-sm-block", styles.borderBottom)}>
          <div className="container">
            <div className={styles.headerBottomInner}>
              <div className={styles.innerLeft}>
                <div className={styles.mainNav}>
                  <ul>
                    <li className='active'>
                      <Link to=""><span>Home</span></Link>
                    </li>
                    <li>
                      <Link to=""><span>Shop</span></Link>
                    </li>
                    <li>
                      <Link to=""><span>Blog</span></Link>
                    </li>
                    <li>
                      <Link to=""><span>Pages</span></Link>
                    </li>
                    <li>
                      <Link to="">Element</Link>
                    </li>
                    <li>
                      <Link to="">Buy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.innerRight}>
                <div className="promotion">
                  <ul>
                    <li>
                      <Link to="">SPECIAL OFFER</Link>
                    </li>
                    <li>
                      <Link to="">SPECIAL OFFER</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>   
    </div >
  )
}
export default Header

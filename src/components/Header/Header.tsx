import React, { useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import Search from '../Search/Search'
import { Link, NavLink } from 'react-router-dom'
import TopBar from './TopBar/TopBar'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { GiDeadWood, GiHamburgerMenu } from 'react-icons/gi'
const Header: React.FC = (props) => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'Element', href: '/fads' },
    { name: 'Buy', href: '/ádf' }
  ]
  const [isListMobileOpen, setIsListMobileOpen] = useState(false)

  // Xử lý sự kiện khi click vào toggleMenuMobile
  const handleToggleMenuMobile = () => {
    setIsListMobileOpen(!isListMobileOpen)
  }

  return (
    <div className={styles['root']}>
      <TopBar />
      <div className={styles.mainHeader}>
        <div className='container'>
          <div className={classNames(styles.center, 'd-flex justify-content-between')}>
            <div className={classNames(styles.menuMobile, isListMobileOpen ? 'd-block' : '', 'd-sm-none')}>
              <Link className={styles.toggleMenuMobile} to='' onClick={handleToggleMenuMobile}>
                <GiHamburgerMenu size={30} color='black' />
              </Link>

              <ul className={styles.listMenuMobile}>
                {navigation.map((menuItem) => (
                  <li key={menuItem.name}>
                    <Link to={menuItem.href}>{menuItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.wrapperLogo}>
              <Link to='/' className='d-flex justify-content-between align-items-center'>
                <GiDeadWood color='black' size={35} />
                <span className={styles.logo}>
                  <span className={styles.mainLogo}>F</span>
                  unimart
                </span>
                {/* <img className={styles.logo} src={logo} alt='' /> */}
              </Link>
            </div>
            <div className={styles.wrapperSearch}>
              <div className={styles.search}>
                <Search />
              </div>
            </div>
            <div className={classNames('animate-dropdown', styles['header-right'])}>
              <div className={styles['header-account']}>
                <Link to='login'>Login</Link>
                <div className={styles.borderRight}></div>
                <Link to='register'>Register</Link>
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
        <div className={classNames('container-fluid d-none d-sm-block', styles.borderBottom)}>
          <div className='container'>
            <div className={styles.headerBottomInner}>
              <div className={styles.innerLeft}>
                <div className={styles.mainNav}>
                  <ul>
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          className={({ isActive }) => {
                            return `${item.href} ${isActive ? 'active' : ''}`
                          }}
                          to={item.href}
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.innerRight}>
                <div className='promotion'>
                  <ul>
                    <li>
                      <Link to=''>SPECIAL OFFER</Link>
                    </li>
                    <li>
                      <Link to=''>SPECIAL OFFER</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header

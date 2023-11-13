import React, { useState, useRef} from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import TopBar from './TopBar/TopBar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Header: React.FC = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div id="#header" className={styles['root']}>
      <nav className={styles['nav']}>
        <p className={styles.logo}>cvminhquan</p>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='#about' className='nav-link'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='#projects' className='nav-link'>
              Project
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <GiHamburgerMenu size={24} />
          </li>
        </ul>
      </nav>
      <div className={classNames(styles['mobile-nav'], { [styles['open-menu']]: isMenuOpen, [styles['closed-menu']]: !isMenuOpen })}>
        <span onClick={toggleMenu}>
          <AiOutlineClose />
        </span>
        <ul>
          <li>
            <Link to='#home'>Home</Link>
          </li>
          <li>
            <Link to='#about'>About</Link>
          </li>
          <li>
            <Link to='#projects'>Projects</Link>
          </li>
          <li>
            <Link to='#contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header

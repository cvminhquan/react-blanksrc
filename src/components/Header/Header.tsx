// Header.tsx
import React, { useState, useRef } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navMenu = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#project",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <div id="header" className={styles['root']}>
      <nav className={styles['nav']}>
        <p className={styles.logo} onClick={scrollTop}>cvminhquan</p>
        <ul className='nav-menu'>
          {navMenu.map((menuItem) => (
            <li className='nav-item'>
              <Link to={menuItem.link} className='nav-link' title={menuItem.name} onClick={() => window.location.replace(`/${menuItem.link}`)}>
                {menuItem.name}
              </Link>
            </li>
          ))}
          <li onClick={toggleMenu}>
            <GiHamburgerMenu size={24} />
          </li>
        </ul>
      </nav>
      <div
        className={classNames(styles['mobile-nav'], { [styles['open-menu']]: isMenuOpen, [styles['closed-menu']]: !isMenuOpen })}
      >
        <span onClick={toggleMenu}>
          <AiOutlineClose />
        </span>
        <ul>
          {navMenu.map((menuItem) => (
            <li className='nav-item'>
              <Link to={menuItem.link} className='nav-link' title={menuItem.name} onClick={() => window.location.replace(`/${menuItem.link}`)}>
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

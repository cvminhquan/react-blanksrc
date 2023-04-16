import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/img/wood-logo-dark.svg'
import classNames from 'classnames'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'
import TopBar from './TopBar/TopBar'

const Header: React.FC = (props) => {
  return (
    <div className={styles['root']}>
      <TopBar/>
      <div className={styles.mainHeader}>
        <div className='container'>
          <div className={classNames(styles.center, 'row')}>
            <div className='col-xs-12 col-sm-12 col-md-3'>
              <Link to='/'>
                {/* <span className={styles.logo}>
                  <span className={styles.mainLogo}>F</span>
                  unimart
                </span> */}
                <img className={styles.logo} src={logo} alt="" />
              </Link>
            </div>
            <div className='col-xs-12 col-sm-12 col-lg-7'>
              <div className={styles.search}>
                <Search />
              </div>
            </div>
            <div className={classNames('col-xs-12 col-sm-12 col-md-2 animate-dropdown', styles['top-cart-row'])}>
              <div className={classNames('dropdown', styles['dropdown-cart'])}>
                <Link to='#' className={classNames('dropdown-toggle', styles['link-cart'])} data-toggle='dropdown'>
                  <div className={styles['items-cart-inner']}>
                    <div className={styles['basket']}>
                      <i className='glyphicon glyphicon-shopping-cart'></i>
                    </div>
                    <div className={styles['basket-item-count']}>
                      <span className='count'>2</span>
                    </div>
                    <div className={styles['total-price-basket']}>
                      <span className='lbl'>cart -</span>
                      <span className='total-price'>
                        <span className='sign'>$</span>
                        <span className='value'>600.00</span>
                      </span>
                    </div>
                  </div>
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <div className='cart-item product-summary'>
                      <div className='row'>
                        <div className='col-xs-4'>
                          <div className='image'>
                            <a href='detail.html'>
                              <img src='assets\images\cart.jpg' alt='' />
                            </a>
                          </div>
                        </div>
                        <div className='col-xs-7'>
                          <h3 className='name'>
                            <a href='index.php?page-detail'>Simple Product</a>
                          </h3>
                          <div className='price'>$600.00</div>
                        </div>
                        <div className='col-xs-1 action'>
                          <Link to='#'>
                            <i className='fa fa-trash'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='clearfix'></div>
                    <div className='clearfix cart-total'>
                      <div className='pull-right'>
                        <span className='text'>Sub Total :</span>
                        <span className='price'>$600.00</span>
                      </div>
                      <div className='clearfix'></div>
                      <a href='checkout.html' className='btn btn-upper btn-primary btn-block m-t-20'>
                        Checkout
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header

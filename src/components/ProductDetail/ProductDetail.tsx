import React from 'react'
import styles from './ProductDetail.module.scss'
import p5 from './../../assets/img/p5.jpg'
import classNames from 'classnames'
import p8 from '../../assets/img/p8.jpg'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import Button from '../Button/Button'
const ProductDetail: React.FC = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3'>
          <div className={styles.hotDealWrapper}>
            <h3 className={styles.hotDealTitle}>Hot Deal</h3>
            <div className={styles.productHotDeal}>
              <div className={styles.productImage}>
                <img src={p5} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.hotDealWrapper}>
            <h3 className={styles.hotDealTitle}>Hot Deal</h3>
            <div className={styles.productHotDeal}>
              <div className={styles.productImage}>
                <img src={p5} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-9'>
          <div className={classNames(styles.productWrapper, 'row')}>
            <div className={classNames('col-xs-12 col-sm-6 col-md-5', styles.gallery)}>
              <div className={styles.productImg}>
                <img src={p8} alt='' />
              </div>
            </div>
            <div className={classNames('col-sm-6 col-md-7', styles.productInfor)}>
              <h1 className={styles.productTitle}>Table</h1>
              <div className={styles.productPrice}>34235$</div>
              <div className={styles.productReview}>
                <ul>
                  <li>
                    <FaStar size='16' color='yellow' />
                  </li>
                  <li>
                    <FaStar size='16' color='yellow' />
                  </li>
                  <li>
                    <FaStar size='16' color='yellow' />
                  </li>
                  <li>
                    <FaStar size='16' color='yellow' />
                  </li>
                  <li>
                    <FaStarHalfAlt size='16' color='yellow' />
                  </li>
                </ul>
              </div>
              <div className={styles.productStatus}>
                <p className={styles.statusLabel}>Availability</p>
              </div>
              <div className={styles.productDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </div>
              <div className={classNames(styles.infoContainer,'row align-items-center')}>
                <div className='col-sm-2'>
                  <span className='label'>Qty :</span>
                </div>
                <div className='col-sm-2'>
                  <div className={styles.quantInput}>
                    <div className={styles.arrows}>
                      <div className={classNames(styles.arrow, styles.plus, styles.gradient)}>
                        <span className='ir'>
                        <IoMdArrowDropup/>
                        </span>
                      </div>
                      <div className={classNames(styles.arrow, styles.minus, styles.gradient)}>
                        <span className='ir'>
                        <IoMdArrowDropdown/>
                        </span>
                      </div>
                    </div>
                    <input className={styles.text} type='text' value='1' />
                  </div>
                </div>
                <div className={classNames('col-sm-7')}>
                  <div className={styles.actionAdd}>
                    <Button content='Add to cart' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

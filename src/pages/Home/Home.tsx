import React, { useState } from 'react'
import styles from './Home.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import { Pagination, Navigation, Grid } from 'swiper'
import classNames from 'classnames'
import banner1 from '../../assets/img/01.jpg'
import banner2 from '../../assets/img/02.jpg'
import { listCategories } from '~/data/listCategories'

interface Banner {
  id: number
  keyword: string
  subTitle: string
  title: string
  price: number
  descripsion: string
  img: string
}

const Home: React.FC = (props) => {
  const parentCategories = listCategories.filter((item) => item.parentId === null)
  const listBanner: Banner[] = [
    {
      id: 1,
      keyword: 'top-smartphone',
      subTitle: 'Top smartphone',
      title: 'Performance wonderful',
      price: 999,
      descripsion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      img: banner1
    },
    {
      id: 2,
      keyword: 'top-smartphone',
      subTitle: 'Top smartphone',
      title: 'Performance wonderful',
      price: 999,
      descripsion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      img: banner2
    },
    {
      id: 3,
      keyword: 'top-smartphone',
      subTitle: 'Top smartphone',
      title: 'Performance wonderful',
      price: 999,
      descripsion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      img: banner1
    },
    {
      id: 4,
      keyword: 'top-smartphone',
      subTitle: 'Top smartphone',
      title: 'Performance wonderful',
      price: 999,
      descripsion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      img: banner2
    }
  ]
  return (
    <div className='container'>
      <div className='col-12 d-flex my-30'>
        <div className={styles.category}>
          <div className={styles.menuCategory}>
            <div className={styles.headerCategory}>
              <div className={styles.menuOpen}>
                <span className={styles.menuIcon}>
                  <GiHamburgerMenu size={22} />
                </span>
                <span className={styles.menuLabel}>Category</span>
              </div>
            </div>
          </div>
          <div className={styles.listMenu}>
            <ul className={styles.menu}>
              {parentCategories.map((category) => (
                <li key={category.name} className={classNames('position-relative', styles.parentItem)}>
                  <Link
                    to={`/category/${category.keyword}`}
                    className='d-flex justify-content-between align-items-center'
                  >
                    <div className='flex-center'>
                      <img src={category.img} width='20px' alt='' />
                      <div>{category.name}</div>
                    </div>
                    <span>
                      <MdOutlineKeyboardArrowRight />
                    </span>
                  </Link>
                  <ul className={styles.subMenu}>
                    <li>
                      <div className='row'>
                        {listCategories
                          .filter((item) => item.parentId === category.id)
                          .map((subCategory) => (
                            <div className='col-lg-3' key={subCategory.id}>
                              <Link to={`/category/${subCategory.keyword}`}>{subCategory.name}</Link>
                            </div>
                          ))}
                      </div>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true
          }}
          onSlideChange={() => console.log('slide change')}
          modules={[Pagination]}
          className={classNames('mySwiper', styles.swiperHome)}
        >
          {listBanner.map((banner) => (
            <SwiperSlide key={banner.id} className={styles.swiperBanner}>
              <img src={banner.img} alt='' />
              <div className={styles.inforBanner}>
                <h3 className={styles.bannerSubTitle}>{banner.subTitle}</h3>
                <h2 className={styles.bannerTitle}>{banner.title}</h2>
                <div className={styles.bannerDescription}>{banner.descripsion}</div>
                <Link to={banner.keyword} className={styles.bannerButton}>
                  {banner.price}$ | Buy Now
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className='col'>
        <div className={styles.sectionCategory}>
          fasdjfhjashf ádfjash
          <div className='row gy-5'>
            <h2>Category</h2>
            <Swiper
              slidesPerView={5}
              navigation={true}
              loop={true}
              grid={{
                rows: 2
              }}
              modules={[Grid, Navigation, Pagination]}
            >
              {listCategories.map((category) => (
                <SwiperSlide key={category.name}>
                  <Link to=''>
                    <div className={styles.categoryItem}>
                      <img src={category.img} alt='' />
                      <span>{category.name}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Home

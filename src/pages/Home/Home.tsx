import React from 'react'
import styles from './Home.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Pagination, Navigation, Grid } from "swiper";
import classNames from 'classnames';
import banner1 from '../../assets/img/01.jpg'
import banner2 from '../../assets/img/02.jpg'

const Home: React.FC = (props) => {
  const listCategories = [
    { name: 'Wood Funiture', img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
    { name: 'Upholstery & Mattess', img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
    { name: 'Electronic', img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
    { name: 'Home Decoration', img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
    { name: 'Textiles', img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
    { name: 'Kitchenware', img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
    { name: 'Small Storage', img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
    { name: 'Collections', img: 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn' },
  ]
  return (
    <div className='container'>
      <div className="col col-xs-12 d-flex my-30">
        <div className={styles.category}>
          <div className={styles.menuCategory}>
            <div className={styles.headerCategory}>
              <div className={styles.menuOpen}>
                <span className={styles.menuIcon}><GiHamburgerMenu size={22} /></span>
                <span className={styles.menuLabel}>Category</span>
              </div>
            </div>
          </div>
          <div className={styles.listMenu}>
            <ul>
            {listCategories.map((category) => (
              <li>
                <Link to="">
                  <div className="d-flex">
                    <span>{category.name}</span>
                    MdOutlineKeyboardArrowRight
                  </div>
                </Link>
                </li>
            ))}
            </ul>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={classNames("mySwiper", styles.swiperHome)}
        >
          <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        </Swiper>
      </div>
      
      <div className="col">
        <div className={styles.sectionCategory}>
          fasdjfhjashf
          ádfjash
          {/* <div className="row gy-5">
            <h2>Category</h2>
            <Swiper
              slidesPerView={5}
              navigation={true}
              loop={true}
              grid={{
                rows: 2,
              }}
              modules={[Grid, Navigation, Pagination]}>
              {listCategories.map((category) => (
                <SwiperSlide key={category.name}>
                  <Link to="">
                    <div className={styles.categoryItem}>
                      <img src={category.img} alt="" />
                      <span>{category.name}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
      </div>
    </div>
    
  )
}

export default Home

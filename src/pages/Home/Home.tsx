import React from 'react'
import styles from './Home.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../index.css"
import { Pagination, Navigation } from "swiper";
import classNames from 'classnames';
import banner1 from '../../assets/img/01.jpg'
import banner2 from '../../assets/img/02.jpg'

const Home: React.FC = (props) => {

  return (
    <div className='container mt-20'>
      <div className="col col-xs-12 d-flex">
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
              <li><Link to="">1</Link></li>
              <li><Link to="">2</Link></li>
              <li><Link to="">2</Link></li>
              <li><Link to="">4</Link></li>
              <li><Link to="">5</Link></li>
              <li><Link to="">6</Link></li>
              <li><Link to="">7</Link></li>
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
          <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default Home

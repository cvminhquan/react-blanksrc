import React from 'react'
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

const Home: React.FC = (props) => {
  const listCategories = [
    { id: 1, name: 'Wood Funiture', parentId: null },
    { id: 2, name: 'Upholstery & Mattess', parentId: null },
    { id: 3, name: 'Home Decoration', parentId: null },
    { id: 4, name: 'Textiles', parentId: null },
    { id: 5, name: 'Kitchenware', parentId: null },
    { id: 6, name: 'Small Storage', parentId: null },
    { id: 7, name: 'Collections', parentId: null },
    { id: 2, name: 'Table', parentId: 1 },
    { id: 3, name: 'Dining Table Set', parentId: 1 },
    { id: 4, name: 'Beds', parentId: 1 },
    { id: 6, name: 'Chair, Stools & Benchs', parentId: 1 },
    { id: 7, name: 'Wall-mounted Product', parentId: 1 },
    { id: 8, name: 'Mirrors', parentId: 1 },
    { id: 10, name: "Kid's Furnitures", parentId: 1 },
    { id: 11, name: 'Sofas', parentId: 2 },
    { id: 12, name: 'Living Room Chairs', parentId: 2 },
    { id: 13, name: 'Mattresses', parentId: 2 },
    { id: 14, name: 'Lamps', parentId: 3 },
    { id: 15, name: 'Aroma Oil & Potpourris', parentId: 3 },
    { id: 16, name: 'Frames, Painting & Pictures', parentId: 3 },
    { id: 17, name: 'Artificial Flowers & Plants', parentId: 3 },
    { id: 18, name: 'Clocks', parentId: 3 },
    { id: 19, name: 'Candles, Tealights & Holders', parentId: 3 },
    { id: 20, name: 'Decorative Objects', parentId: 3 },
    { id: 21, name: 'Soft Toys', parentId: 3 }
  ]
  const parentCategories = listCategories.filter((item) => item.parentId === null)
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
                <li key={category.name}>
                  <Link to='' className='d-flex justify-content-between align-items-center'>
                    <span>{category.name}</span>
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
                              <Link to=''>{subCategory.name}</Link>
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
          navigation={true}
          modules={[Pagination, Navigation]}
          className={classNames('mySwiper', styles.swiperHome)}
        >
          <SwiperSlide>
            <img src={banner1} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner1} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt='' />
          </SwiperSlide>
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

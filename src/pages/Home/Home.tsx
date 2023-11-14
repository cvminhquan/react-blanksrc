import React, { useState, useRef } from 'react'
import styles from './Home.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import classNames from 'classnames'
import Button from 'react-bootstrap/Button';
import {HiOutlineDownload} from 'react-icons/hi'
import About from '../About/About'
import Project from '../Project/Project'

const Home: React.FC = (props) => {
  const imageList = [
    { src: '/src/assets/img/HTML.svg', alt: 'HTML', title: 'HTML', cate: 'Programming' },
    { src: '/src/assets/img/CSS.svg', alt: 'CSS', title: 'CSS', cate: 'Programming' },
    { src: '/src/assets/img/JavaScript.svg', alt: 'JavaScript', title: 'JavaScript', cate: 'Programming' },
    { src: '/src/assets/img/Typescript.svg', alt: 'Typescript', title: 'Typescript', cate: 'Programming' },
    { src: '/src/assets/img/JQuery.svg', alt: 'JQuery', title: 'JQuery', cate: 'Programming' },
    { src: '/src/assets/img/Bootstrap.svg', alt: 'Bootstrap', title: 'Bootstrap', cate: 'Framework' },
    { src: '/src/assets/img/Sass.svg', alt: 'Sass', title: 'Sass', cate: 'Framework' },
    { src: '/src/assets/img/PHP.svg', alt: 'PHP', title: 'PHP', cate: 'Programming' },
    { src: '/src/assets/img/React.svg', alt: 'React', title: 'React', cate: 'Framework' },
    { src: '/src/assets/img/Wordpress.svg', alt: 'Wordpress', title: 'Wordpress', cate: 'Framework' }
  ]

  const programmingImages = imageList.filter((image) => image.cate === 'Programming')
  const frameworkImages = imageList.filter((image) => image.cate === 'Framework')

  return (
    <>
      <div id='home' className={styles['hero']}>
        <div className={classNames(styles['container'])}>
          <div className='timeline'>
            <div className='bullet'></div>
          </div>
          <div className={classNames(styles['content'], 'hero')}>
            <div className={styles['hero-main']}>
              <div className={styles['hero-text']}>
                <h1>Front-End Developer</h1>
                <p className={classNames(styles.heroName, "font-cursive")}>👋 <span>Hi, I&apos;m Quan </span></p>
                  <p>A Front-End Developer. Welcome to my portfolio</p>
                <Button className={styles.downloadCV}>Download CV <HiOutlineDownload size={20}/></Button>
              </div>
              <div className={styles['hero-img']}></div>
            </div>
            <div className={styles['skills']}>
              <div className={styles['logos']}>
                <table>
                  <tr>
                    <td style={{verticalAlign: "middle"}}>Programming skill</td>
                    {programmingImages.map((image, index) => (
                      <td key={index}>
                        <img src={image.src} alt={image.alt} title={image.title} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td style={{verticalAlign: "middle"}}>Framework</td>
                    {frameworkImages.map((image, index) => (
                      <td key={index}>
                        <img src={image.src} alt={image.alt} title={image.title} />
                      </td>
                    ))}
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='' id='about'>
        <About />
      </div>
      <div className='' id='project'>
        <Project />
      </div>
    </>
  )
}

export default Home
import React from 'react'
import styles from './About.module.scss'
import classNames from 'classnames'
import AboutImg from "/src/assets/img/about-img.webp";
import RoundedText from "/src/assets/img/text2.svg";
import WorkingEmoji from "/src/assets/img/working-emoji.png";

const About: React.FC = (props) => {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <div className={styles["about-content"]}>
            <div className={styles["img-side"]}>
              <img src={WorkingEmoji} alt="emoji" className={styles["work-emoji"]} />
              <img src={AboutImg} alt="mee" className={styles["img-side__main-img"]} />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className={styles["text-side"]}>
              <h3>About me</h3>
              <h4>
                A dedicated Front-end Developer <br /> based in Ho Chi Minh City, Vietnam
                📍
              </h4>
              <p>
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

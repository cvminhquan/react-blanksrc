import React from 'react'
import styles from './Contact.module.scss'
import classNames from 'classnames'

const About: React.FC = (props) => {
  return (
    <div id={styles.about}>
      <div className={styles['contact-redirect-block']}>
        <div className={styles['cr-content']}>
          <img
            decoding='async'
            data-aos='fade-down-right'
            src='https://squareme.si/wp-content/uploads/2019/10/arrow-bottom-right-direction.svg'
            alt='Arrow illustration'
            className={classNames(styles['br-arrow-icon'], styles[' aos-init'], styles['aos-animate'])}
          />
          <img
            decoding='async'
            data-aos='fade-down'
            data-aos-offset='350'
            src='https://squareme.si/wp-content/uploads/2019/10/curled-arrow.svg'
            alt='Curled arrow illustration'
            className={classNames(styles['curly-arrow-icon'], styles[' aos-init'], styles['aos-animate'])}
          />
          <img
            decoding='async'
            data-aos='fade-down-left'
            src='https://squareme.si/wp-content/uploads/2019/10/arrow-bottom-left-direction.svg'
            alt='Arrow illustration'
            className={classNames(styles['bl-arrow-icon'], styles[' aos-init'], styles['aos-animate'])}

          />

          <a
            data-aos='fade-up'
            data-aos-offset='150'
            href='https://squareme.si/en/contact/'
            className={classNames(styles['link-wrap'], styles[' aos-init'], styles['aos-animate'])}
            data-cursor='false'
            data-cursor-type='link'
          >
            <img
              decoding='async'
              src='https://squareme.si/wp-content/uploads/2019/10/big-bubble.svg'
              alt='Big bubble illustration'
              className={styles['big-bubble-icon']}
            />
            <h5 className={styles.h5}>Got a project?</h5>
            <h2 className={styles.h1}>
              Let’s <strong>talk</strong>.
            </h2>
          </a>

          <img
            decoding='async'
            src='https://squareme.si/wp-content/uploads/2019/10/afro-guy.svg'
            alt='Afro guy illustration'
            className='afro-guy-icon'
          />
        </div>
      </div>
    </div>
  )
}

export default About

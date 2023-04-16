import React from 'react'
import styles from './Home.module.scss'
import { computePosition, flip, shift, offset } from '@floating-ui/dom'


const Home: React.FC = (props) => {
  const button = document.querySelector('#button') as HTMLElement
  const tooltip = document.querySelector('styles.tooltip') as HTMLElement
  
  if (button && tooltip) {
    computePosition(button, tooltip, {
      placement: 'top',
      middleware: [offset(6), flip(), shift({ padding: 5 })]
    }).then(({ x, y }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`
      })
    })
  }
  

  return (
    <div>
      <button id='button' aria-describedby='tooltip'>
        My button
      </button>
      <div id={styles.tooltip} role='tooltip'>
        My tooltip
      </div>
    </div>
  )
}

export default Home

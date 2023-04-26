import React from 'react'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'
interface ButtonProps {
  content: string
}
const Button: React.FC<ButtonProps> = ({ content }) => {
  return <Link to=''>{content}</Link>
}

export default Button

import React from 'react'
import styles from './AuthLayout.module.scss'
import Header from '~/components/Header/Header'
interface AuthLayoutProps{
  children?: React.ReactNode
}
function AuthLayout ({children}:AuthLayoutProps)  {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default AuthLayout

'use client'

import Header from '@/components/header/Header'
import HomePage from '@/pages/home/HomePage'
import Auth from '@/pages/login/Auth'
import Login from '@/pages/login/Login'
import { useState } from 'react'

export default function Home() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <main className={`${isLogin && 'mt-[56px]'}`}>
      { !isLogin ?
        <Auth /> :
        <HomePage />
      }
    </main>
  )
}

'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import SearchInput from '../common/SearchInput';
import HeaderOption from './HeaderOption';
import Image from 'next/image';
import HeaderNav from './HeaderNav';

type Props = {}

const Header = (props: Props) => {
  const [isLogin, setIsLogin] = useState(false)

  if(isLogin) 
  return (
    <div className='h-[56px] bg-header flex justify-between items-center gap-2 px-4 fixed top-0 w-full'>
        <div className='flex items-center gap-2'>
          <Link href={''} >
              <Image alt='logo' src={'/image/logo.webp'} width={40} height={40}/>
          </Link>
          <SearchInput />
        </div>
        <HeaderNav />
        <HeaderOption />
    </div>
  )
  else return null
}

export default Header;
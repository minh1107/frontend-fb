'use client'
import HomeNavigate from '@/components/home/HomeNavigate'
import HomeStatus from '@/components/home/HomeStatus'
import NewsFeed from '@/components/home/NewsFeed'
import { RootState } from '@/lib/store'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const HomePage = (props: Props) => {
  const {accessToken, currentUser} = useSelector((state: RootState) => state.userReducer)
  console.log(currentUser)
  return (
    <div className='flex text-white justify-between '>
      <div className='w-[308px]   '>
        <HomeNavigate />
      </div>
      <div className='h-[2000px]'>
        <NewsFeed />
      </div>
      <div className='w-[308px]'>
        <HomeStatus />
      </div>
    </div>
  )
}

export default HomePage
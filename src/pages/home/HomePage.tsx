import HomeNavigate from '@/components/home/HomeNavigate'
import HomeStatus from '@/components/home/HomeStatus'
import NewsFeed from '@/components/home/NewsFeed'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='flex  text-white justify-between '>
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
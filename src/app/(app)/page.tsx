import CreatePost from '@/pages/home/NewsFeed/CreatePost'
import Post from '@/pages/home/NewsFeed/Post'
import React from 'react'

type Props = {}

const NewsFeed = (props: Props) => {
  return (
    <div className='flex gap-4 flex-col'>
      <CreatePost />
      <Post />
    </div>
  )
}

export default NewsFeed
'use client'
import Auth from '@/pages/login/Auth'
import React from 'react'

type Props = {}

const page = (props: Props) => {

  return (
    <div>
      <Auth auth={'register'}/>
    </div>
  )
}

export default page
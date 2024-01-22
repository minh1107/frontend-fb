import { homeLink } from '@/constant/links'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

type Props = {}

const HeaderNav = (props: Props) => {
  const currentRoute = usePathname();
  return (
    <div className='flex'>
      {
        homeLink.map((item, index) => (
          <Link href={item.link}  className={`w-[130px] text-center flex  cursor-pointer my-auto
          ${currentRoute != item.link ? 'hover:bg-[#7a818f73] hover:rounded-md h-[50px]' : 'h-[56px] border-b-[2px] border-blue'}`}>
            <div key={index} className='m-auto' >
                <item.icon color={`${currentRoute==item.link ? 'primary' : 'inherit'}`} className='text-[30px]'/>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default HeaderNav
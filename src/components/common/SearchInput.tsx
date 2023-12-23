import { TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
type Props = {}

const SearchInput = (props: Props) => {
  return (
    <div className='relative'>
      <input type="text" placeholder='Tìm kiếm trên Facebook' 
      className='h-10 px-4 pl-8 w-[212px] font-default bg-input rounded-full outline-none text-[15px]'/>
      <SearchIcon className='absolute left-2 top-1/2 translate-y-[-50%] text-gray-400'/>
    </div>
  )
}

export default SearchInput
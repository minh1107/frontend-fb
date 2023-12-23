import { Button } from '@mui/material'
import React from 'react'

type Props = {
    text: string,
    color: string,
    className: string,
    handleClick?: any,
    type?: any
}

const ButtonCustom = ({className, color,type,  text, handleClick}: Props) => {

  return (
    <Button onClick={handleClick} type={type} variant='contained' className={`font-bold h-[48px] whitespace-no-wrap ${className}`}>{text}</Button>
  )
}

export default ButtonCustom
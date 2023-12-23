import React from 'react'

type Props = {
  placeholder: string,
  type: string,
  register: any,
  name: string,
  require?: boolean
}

const InputCustom = ({placeholder, type, register, name, require=false}: Props) => {
  return (
    <input type={type} className="px-[16px] py-[14px] border w-[364px] focus:border-blue focus:shadow-md outline-none rounded-md outline-[0.2px]" 
     placeholder={placeholder} aria-label={placeholder} {...register(name,  {required: require})}></input>
  )
}

export default InputCustom
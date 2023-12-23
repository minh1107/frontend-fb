'use client'
import { apiLogin, apiRegister } from '@/apis/auth/auth'
import ButtonCustom from '@/components/common/ButtonCustom'
import InputCustom from '@/components/common/InputCustom'
import { RegisterType } from '@/types/auth'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {
    isLogin: boolean,
    setIsLogin: any
}

const Register = ({isLogin, setIsLogin}: Props) => {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm<RegisterType>()
    const onSubmit: SubmitHandler<RegisterType> = async (data) => {
        const res = await apiRegister(data)
        // console.log(res)
        console.log(process.env.NEXT_PUBLIC_SERVER_URL)
    }
    const handleChangeFormLogin = () => {
        setIsLogin(true)
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[396px] bg-white mt-10 pb-[24px] pt-[10px] items-center gap-3 rounded-lg shadow-xl'>
        <h1 className='font-bold text-[24px] text-blue'>Đăng ký tài khoản</h1>
        
        <InputCustom name='first_name' register={register} placeholder='First name...' type='text' require={true}/>
        {errors.first_name && <span className='text-[14px] text-red-500 w-full ml-8 mt-[-10px]'>{errors.first_name.ref?.name} is required</span>}

        <InputCustom name='last_name' register={register} placeholder='Last name...' type='text' require={true}/>
        {errors.last_name && <span className='text-[14px] text-red-500 w-full ml-8 mt-[-10px]'>{errors.last_name.ref?.name} is required</span>}
        
        <InputCustom name='email' register={register} placeholder='Email...' type='email' require={true}/>
        {errors.email && <span className='text-[14px] text-red-500 w-full ml-8 mt-[-10px]'>{errors.email.ref?.name} is required</span>}
        
        <InputCustom name='password' register={register} placeholder='Password...' type='password' require={true}/>
        {errors.password && <span className='text-[14px] text-red-500 w-full ml-8 mt-[-10px]'>{errors.password.ref?.name} is required</span>}
        
        <InputCustom name='rePassword' register={register} placeholder='Repassword...' type='password' require={true}/>
        {errors.rePassword && <span className='text-[14px] text-red-500 w-full ml-8 mt-[-10px]'>{errors.rePassword.ref?.name} is required</span>}
        
        <ButtonCustom type={'submit'} color='primary' className='w-[364px] bg-blue mt-2' text="Đăng Ký"/> 
        
        <ButtonCustom handleClick={handleChangeFormLogin} color='primary' className=' bg-green-700 mt-2' text="Đăng nhập"/> 
    </form>
  )
}

export default Register
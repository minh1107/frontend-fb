'use client'

import { apiLogin } from "@/apis/auth/auth"
import ButtonCustom from "@/components/common/ButtonCustom"
import InputCustom from "@/components/common/InputCustom"
import { LoginType } from "@/types/auth"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"

type Props = {
    isLogin: boolean,
    setIsLogin: any
}

const Login = ({isLogin, setIsLogin}: Props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        } = useForm<LoginType>()
        const onSubmit: SubmitHandler<LoginType> = async (data) => {
           const res = await apiLogin(data);
           console.log(res)
        }
    const handleClick = () => {
        setIsLogin(false)
        console.log(isLogin)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col w-[396px] bg-white mt-10 pb-[24px] pt-[10px] items-center gap-3 rounded-lg shadow-xl'>
        <InputCustom name='email' register={register} placeholder='Email hoặc số điện thoại' type="text"/>
        <InputCustom name='password' register={register} placeholder='Mật khẩu' type='password'/>
        <ButtonCustom type={'submit'} color='primary' className='w-[364px] bg-blue mt-2' text="Đăng nhập"/> 
        <Link href={''} className='text-[14px] text-blue my-[8px]'>Quên mật khẩu?</Link>
        <hr className='bg-black h-[1px] w-[364px] px-[20px] mb-[16px]'/>
        <ButtonCustom handleClick={handleClick} className='bg-green-700' color='success' text="Tạo tài khoản mới"/> 
    </form>
  )
}

export default Login
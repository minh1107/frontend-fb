'use client'

import { apiLogin } from "@/apis/auth/auth"
import ButtonCustom from "@/components/common/ButtonCustom"
import InputCustom from "@/components/common/InputCustom"
import { checkLogin, getAccessToken, getCurrentUser } from "@/lib/features/user/userSlice"
import { RootState } from "@/lib/store"
import { LoginType } from "@/types/auth"
import Link from "next/link"
import {  useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

type Props = {
    isLogin: boolean,
    setIsLogin: any
}
type LoginRes = {
    accessToken: string,
    refreshToken: string,
    user: object,
}

const Login = () => {
    const {accessToken, currentUser} = useSelector((state: RootState) => state.userReducer)
    console.log(currentUser)
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors }} = useForm<LoginType>()
    const { push } = useRouter();
    const onSubmit: SubmitHandler<LoginType> = async (data) => {
        const res:any = await apiLogin(data);
        if(res.status) {
            dispatch(getAccessToken(res.accessToken))
            dispatch(getCurrentUser(res.user))
            dispatch(checkLogin(true))
            toast.success(res.message, {toastId: "unique-random-text-xAu9C9-"})
            setTimeout(() => {
                push('/')
            }, 1000);
        } else {
            toast.error(res.message, {toastId: "unique-random-text-xAu9C9-"})
        }
    }

  return (
      <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col w-[396px] bg-white mt-10 pb-[24px] pt-[10px] items-center gap-3 rounded-lg shadow-xl'>
        <InputCustom name='email' register={register} placeholder='Email hoặc số điện thoại' type="text"/>
        <InputCustom name='password' register={register} placeholder='Mật khẩu' type='password'/>
        <ButtonCustom type={'submit'} color='primary' className='w-[364px] bg-blue mt-2' text="Đăng nhập"/> 
        <Link href={''} className='text-[14px] text-blue my-[8px]'>Quên mật khẩu?</Link>
        <hr className='bg-black h-[1px] w-[364px] px-[20px] mb-[16px]'/>
        <Link href={'/register'} >
        <ButtonCustom color='primary' className=' bg-green-700 mt-2' text="Đăng kí tài khoản"/>
        </Link>
    </form>
  )
}

export default Login
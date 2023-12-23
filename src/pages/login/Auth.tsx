'user client'
import Image from 'next/image'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import InputCustom from '@/components/common/InputCustom';
import ButtonCustom from '@/components/common/ButtonCustom';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import { languages, linkLogin } from '@/constant/resource';
import Login from './Login';
import Register from './Register';
type Props = {}

const Auth = (props: Props) => {
    const [isLogin, setIsLogin] = useState(true)
  return (
    <div className='bg-login max-lg:overflow-scroll  text-black flex h-screen flex-col'>
        <div className='pt-[92px] pb-[132px] w-full flex justify-center max-lg:flex-col max-lg:items-center max-lg:py-10'>
            <div className='mr-[48px] w-[536px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:mr-0'>
                <Image alt='logo' src={'image/logo1.svg'} width={211} height={70} className='m-[-20px] pb-[8px]'/>
                <h1 className='text-[36px]'>Đăng nhập gần đây</h1>
                <p className='text-[15px] mb-[24px]'>Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>
                <div className='flex gap-5 flex-wrap'>
                    {
                        Array.from(Array(2).keys()).map((item, index) => (
                            <div className='relative w-40 shadow rounded-[8px] cursor-pointer hover:shadow__hover'>
                                <Image alt='avatar' src={'/image/avatar.jpg'} width={160} height={160} className='rounded-t-[8px]' />
                                <p className='w-full p-3 text-center'>Nguyen</p>
                                <div className="absolute top-0 cursor-pointer bg-white scale-75 hover:scale-100 transition-all duration-300 rounded-full">
                                    <CloseIcon  color='primary'/>
                                </div>
                            </div>
                        ))
                    }
                    <div className='relative w-40 shadow rounded-[8px] cursor-pointer hover:shadow__hover'>
                        <div className='w-40 h-40 bg-[#F5F6F7] flex rounded-t-[8px]'>
                            <div className='bg-blue rounded-full w-[42px] m-auto h-[42px] flex '>
                                <AddIcon color='success' fontSize='large' className='m-auto' style={{ color: 'white'}}/>
                            </div>
                        </div>
                        <p className='w-full p-3 text-center bg-white rounded-b-[8px] text-blue'>Thêm tài khoản</p>
                        <div className="absolute top-0 cursor-pointer bg-white scale-75 hover:scale-100 transition-all duration-300 rounded-full">
                            <CloseIcon  color='primary'/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='w-[396px]'>
                {isLogin && <Login isLogin={isLogin} setIsLogin={setIsLogin}/>}
                {!isLogin && <Register isLogin={isLogin} setIsLogin={setIsLogin}/>}
                <p className='mt-[28px] text-center'>
                    <b>Tạo Trang</b> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
                </p>
            </div>
        </div>
        <div className='bg-white flex-1 flex text-[#8a8d91] text-[12px] '>
            <div className='w-[990px]  flex flex-col gap-4 my-4 mx-auto max-lg:w-[600px]'>
                <div className='flex gap-x-4  flex-wrap'>
                    {languages.map((link, index) => (
                        <Link key={index} href={link} className='capitalize  hover:underline'>
                        {link.replace('/', '').replace(/-/g, ' ')}
                        </Link>
                    ))}
                    </div>
                <hr />
                <div className='flex gap-x-4  flex-wrap'>
                    {linkLogin.map((link, index) => (
                        <Link key={index} href={link} className='capitalize  hover:underline'>
                        {link.replace('/', '').replace(/-/g, ' ')}
                        </Link>
                    ))}
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Auth
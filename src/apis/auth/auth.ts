import { LoginType, RegisterType } from "@/types/auth";
import instance from "../intance";

export const apiRegister = (data: RegisterType) => instance({
    url: '/auth/register/sendmail', 
    method: "post",
    data, 
    withCredentials: true
})

export const apiLogin = (data: LoginType) => instance({
    url: '/auth/login',
    method: 'post',
    data,
})

export const apiLogout = (userId: number) => instance({
    url: `/auth/logout/${userId}`,
    method: 'get',
})
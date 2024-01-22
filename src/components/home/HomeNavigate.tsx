'use client'
import { homeNavigate } from "@/constant/links";
import Image from "next/image";
import React, { useRef } from "react";
import "@/css/home.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
type Props = {};

const HomeNavigate = (props: Props) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
    const handleMouseOver = () => {
      if (scrollRef.current) {
        scrollRef.current.style.overflow = 'auto';
      }
    };
  
    const handleMouseOut = () => {
      if (scrollRef.current) {
        scrollRef.current.style.overflow = 'hidden';
      }
    };
  return (
    <div className="fixed overflow-auto bg-navigate duration-500 transition-all h-[calc(100vh-56px)]" ref={scrollRef}  id='scroll'
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
      <div className="flex flex-col h-full w-[308px] p-4 ">
        <div className="flex flex-col">
          {homeNavigate.map((item, index) => (
            <div className="flex items-center hover:bg-[#4E4F50] cursor-pointer rounded-md p-2 gap-2 ">
              <div
                className="home__navigate "
                style={{ backgroundPositionY: item.position }}
              ></div>
              <p>{item.name}</p>
            </div>
          ))}
          <div className="flex items-center hover:bg-[#4E4F50] cursor-pointer rounded-md p-2 gap-2">
            <div className="p-2 rounded-full bg-[#444546] "><KeyboardArrowDownIcon className="text-[30px]"/></div>
            <p>Xem thêm</p>
          </div>
        </div>
        <div className="h-[1px] w-full my-2 px-2 bg-[#444546]"></div>
        <div className="mb-4">
          <div className="flex justify-between pt-2">
            <h2>Lối tắt của bạn</h2>
            <p>Chỉnh sửa</p>
          </div>
          <div className="flex flex-col">
          {homeNavigate.map((item, index) => (
            <div className="flex items-center hover:bg-[#4E4F50] cursor-pointer rounded-md p-2 gap-2 ">
              <div
                className="home__navigate "
                style={{ backgroundPositionY: item.position }}
              ></div>
              <p>{item.name}</p>
            </div>
          ))}
          <div className="flex items-center hover:bg-[#4E4F50] cursor-pointer rounded-md p-2 gap-2">
            <div className="p-2 rounded-full bg-[#444546] "><KeyboardArrowDownIcon className="text-[30px]"/></div>
            <p>Xem thêm</p>
          </div>
        </div>
        </div>
        <div className="text-[13px] mt-auto">
          Quyền riêng tư  · Điều khoản  · Quảng cáo  · Lựa chọn quảng cáo   · Cookie  · Xem thêm · Meta © 2023
        </div>
      </div>
    </div>
  );
};
export default HomeNavigate;

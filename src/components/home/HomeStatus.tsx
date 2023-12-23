'use client'
import { homeNavigate } from "@/constant/links";
import Image from "next/image";
import React, { useRef } from "react";

type Props = {};

const HomeStatus = (props: Props) => {
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
    <div className="fixed overflow-auto bg-navigate duration-500 transition-all h-[calc(100vh-56px)]"
    ref={scrollRef}  id='scroll'
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
       <div className="flex flex-col h-full w-[308px] p-4 ">
          <div >
            <h1>Trang và trang cá nhân của bạn</h1>
            <div className="flex">
              <div><Image src={''} alt=""/>Name cua ban</div>
            </div>
          </div>
          <div className="h-[1px] w-full my-2 px-2 bg-[#444546]"></div>
          <div>
            <div>
              <h1>Người liên hệ</h1>

            </div>
            <div>
              User
            </div>
          </div>
      </div>
    </div>
  );
};

export default HomeStatus;

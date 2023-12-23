import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";

type Props = {};

const HeaderOption = (props: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-[#4E4F50] rounded-full cursor-pointer hover:bg-[#5c5d5e]">
        <MenuIcon className="text-[24px] m-2" />
      </div>
      <div className="bg-[#4E4F50] rounded-full cursor-pointer hover:bg-[#5c5d5e]">
        <ChatBubbleIcon className="text-[24px] m-2" />
      </div>
      <div className="bg-[#4E4F50] rounded-full cursor-pointer hover:bg-[#5c5d5e]">
        <NotificationsIcon className="text-[24px] m-2" />
      </div>
      <div>
        <Image src={""} alt="avatar" />
      </div>
    </div>
  );
};

export default HeaderOption;

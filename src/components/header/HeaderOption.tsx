import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
import { Button, Menu } from "@mui/material";
import { apiLogout } from "@/apis/auth/auth";
import { useRouter  } from 'next/navigation'
import { toast } from "react-toastify";
type Props = {};
type Res = {
  status: boolean
  message: string
}
const HeaderOption = (props: Props) => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    const res:any = await apiLogout(1)
    if(res.status) {
      router.push('/login')
    } else {
      toast.error(res.message, {toastId: "unique-random-text-xAu9C9-"})
    }
  }
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
        <Button onClick={handleClick}>
          <Image
            src={"/avatar.jpg"}
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
            alt="avatar"
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}

        >
          <div className="w-[360px] bg-navigate text-white m-0 p-4 rounded-md pt-[4px] flex flex-col">
            <div className="h-[60px] flex gap-2 items-center rounded-md mt-1 p-2 cursor-pointer hover:bg-hover">
              <Image src={'/avatar.jpg'} width={40} className="rounded-full" height={40} alt="avatar"></Image>
              <span>Quang Minh</span>
            </div>
            <div className="h-[60px] flex gap-2 items-center rounded-md mt-1 p-2 cursor-pointer hover:bg-hover">
              <Image src={'/avatar.jpg'} width={40} className="rounded-full" height={40} alt="avatar"></Image>
              <span>Quang Minh</span>
            </div>
            <hr />
            <div className="mt-4">
              <div className="h-[50px] flex gap-2 items-center rounded-md mt-1 p-2 cursor-pointer hover:bg-hover">
                <div onClick={handleLogout}>
                  {/* <Image src={'/avatar.jpg'} width={40} className="rounded-full" height={40} alt="avatar"></Image> */}
                  <span>Đăng xuất</span>
                </div>
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default HeaderOption;

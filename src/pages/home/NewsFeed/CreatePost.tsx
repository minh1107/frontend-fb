"use client";
import { Button, Modal } from "@mui/material";
import Image from "next/image";
import React from "react";

const CreatePost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="pt-[12px] px-[16px] pb-[10px] bg-header mt-3 rounded-md">
      <div className="flex items-center gap-4 ">
        <Image
          alt="image"
          src={"/avatar.jpg"}
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
        <div className="bg-input rounded-full p-2 px-4 flex-1 hover:opacity-90" onClick={handleOpen}>
          Minh ơi, bạn đang làm gì thế
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex flex-col gap-4 relative p-4 items-center bg-header w-[500px] rounded-md mx-auto mt-[50vh] translate-y-[-50%]">
            <div onClick={handleClose} className="absolute right-0 top-0 cursor-pointer">Close</div>
            <h2 className="">Tạo bài viết</h2>
            <div className="flex gap-4 w-full items-center" >
                <Image className="rounded-full object-cover w-[40px] h-[40px]" alt="avatar" width={40} height={40} src={'/avatar.jpg'}></Image>
                <div>
                    <p>Quang Minh</p>
                    <p>Công khai</p>
                </div>
            </div>
            <textarea name="" className="bg-input w-full" id=""></textarea>
            <input type="file" placeholder="Thêm ảnh"/>
            <Button variant="contained" className="bg-blue w-full p-2 rounded-md">Đăng bài</Button>

        </div>
      </Modal>
    </div>
  );
};

export default CreatePost;

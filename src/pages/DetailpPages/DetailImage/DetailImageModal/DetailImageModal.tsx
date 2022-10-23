import React, { useState } from "react";
import { Button, Modal } from "antd";

type Props = {
  arrImage?: { img: string }[];
  open?: boolean;
  setOpen?:(value: boolean) => void;
};

export default function DetailImageModal({open,setOpen }: Props) {
  return (
    <div className={`absolute left-0 w-full bg-slate-500 ${open ? "opacity-1 z-10 h-full":"opacity-0 -z-0 h-0"}`}  style={{top:'-128px'}}>
       fsdfds
    </div>
  );
}


{/* <Modal
        title="More Image"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={10000}
        // style={{ width: "100%" }}
      >
        {arrImage.map((item,index)=>{
          return <div className="flex items-center justify-center" key={index}>
              <img src={item.img} alt="..."/>
          </div>
        })}
      </Modal> */}
import React, { useState } from "react";
import { Button, Modal } from "antd";

type Props = {
  arrImage: { img: string }[];
  open: boolean;
  setOpen:any;
};

export default function DetailImageModal({ arrImage, open,setOpen }: Props) {
  // const [ope, setOpe] = useState(open);
  return (
    <>
      <Modal
        title="More Image"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={100000000}
        // height={100000}
        style={{ width: "100%" }}
      >
        {arrImage.map((item,index)=>{
          return <div className="flex items-center justify-center" key={index}>
              <img src={item.img} alt="..."/>
          </div>
        })}
      </Modal>
    </>
  );
}

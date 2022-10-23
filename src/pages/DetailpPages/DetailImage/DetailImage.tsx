import React, { useState } from "react";
import { TiThSmall } from "react-icons/ti";
import { Button } from "antd";

import DetailImageModal from "./DetailImageModal/DetailImageModal";
// import overlayStyles from "";

type Props = {
  arrImage: { img: string }[];
};

export default function DetailImage({ arrImage }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mt-6">
        <div className="grid grid-cols-4 gap-2 h-96 overflow-hidden rounded-2xl">
          <button
            className={`w-full row-span-2 col-span-2 h-full `}
            onClick={() => setOpen(true)}
            style={{
              backgroundImage: `url(${arrImage[0].img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></button>
          <button
            className="w-full h-full"
            style={{
              backgroundImage: `url(${arrImage[0].img})`,
              backgroundSize: "cover",
            }}
          ></button>
          <button
            className="w-full h-full"
            style={{
              backgroundImage: `url(${arrImage[0].img})`,
              backgroundSize: "cover",
            }}
          ></button>
          <button
            className="w-full h-full"
            style={{
              backgroundImage: `url(${arrImage[0].img})`,
              backgroundSize: "cover",
            }}
          ></button>
          <button
            className="w-full h-full relative "
            style={{
              backgroundImage: `url(${arrImage[0].img})`,
              backgroundSize: "cover",
            }}
          >
            <button className="absolute right-8 bottom-5 bg-white py-1 px-3 text-base hover:bg-slate-100 rounded-lg border-2 border-black flex items-center" onClick={() => setOpen(true)}>
              <TiThSmall className="mr-1" />
              Hiện tất cả các ảnh
            </button>
          </button>
        </div>
      </div>
      <DetailImageModal arrImage={arrImage} open={open} setOpen={setOpen} />
    </>
  );
}

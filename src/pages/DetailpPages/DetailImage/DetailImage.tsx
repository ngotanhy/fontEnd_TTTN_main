import React from "react";
import { TiThSmall } from "react-icons/ti";
// import overlayStyles from "";

type Props = {
  arrImage: { img: string }[];
};

export default function DetailImage({ arrImage }: Props) {
  return (
    <>
      <div className="mt-6">
        <div className="grid grid-cols-4 gap-2 h-96 overflow-hidden rounded-2xl">
          <button
            className={`w-full row-span-2 col-span-2 h-full `}
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
            <div className="absolute right-8 bottom-5 bg-white py-1 px-3 text-base hover:bg-slate-100 rounded-lg border-2 border-black flex items-center">
              <TiThSmall className="mr-1" />
              Hiện tất cả các ảnh
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

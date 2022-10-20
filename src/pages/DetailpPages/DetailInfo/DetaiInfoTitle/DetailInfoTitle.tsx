import React from "react";

type Props = {};

export default function DetailInfoTitle({}: Props) {
  return (
    <div >
      <div className="flex justify-between border-b border-slate-400 pb-5">
        <div className="">
          <div className="font-medium text-2xl">{`Toàn bộ nhà nghỉ thôn dã. Chủ nhà ${"Sungwon"}`}</div>
          <div className="text-lg">2 khách · 1 phòng ngủ · 1 giường · 1 phòng tắm</div>
        </div>
        <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" alt="..." className="w-full h-full"/>
        </div>
      </div>
    </div>
  );
}

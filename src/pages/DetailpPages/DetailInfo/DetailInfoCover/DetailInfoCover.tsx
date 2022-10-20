import React from "react";

type Props = {};

export default function DetailInfoCover({}: Props) {
  return (
    <div className="mt-8 border-b border-slate-400 pb-5">
      <div className="font-bold text-3xl mb-3">
        <span className="text-red-500">AIR</span>COVER
      </div>
      <p className=" mb-4 text-base">
        Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy,
        thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự
        cố trong quá trình nhận phòng.
      </p>
      <button className="underline underline-offset-1 font-bold text-base pb-3">Tìm hiểu thêm</button>
    </div>
  );
}

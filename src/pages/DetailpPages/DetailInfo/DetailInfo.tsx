import React from "react";
import DetailBooking from "../DetailBooking/DetailBooking";
import DetailInfoTitle from "./DetaiInfoTitle/DetailInfoTitle";
import DetailCalendar from "./DetailCalendar/DetailCalendar";
import DetailEquipment from "./DetailEquipment/DetailEquipment";
import DetailInfoCover from "./DetailInfoCover/DetailInfoCover";
import DetailInfoPreferential from "./DetailInfoPreferential/DetailInfoPreferential";
import DetailIntroduce from "./DetailIntroduce/DetailIntroduce";
import DetailSleepRoom from "./DetailSleepRoom/DetailSleepRoom";

type Props = {};

export default function DetailInfoRoom({}: Props) {
  return (
    <div className="mt-8 relative">
      <div className="w-3/5">
        <DetailInfoTitle />
        <DetailInfoPreferential/>
        <DetailInfoCover/>
        <DetailIntroduce/>
        <DetailSleepRoom/>
        <DetailEquipment/>
        <DetailCalendar/>
      </div>
      <div className="w-2/5 absolute right-0 top-0">
        <DetailBooking />
      </div>
    </div>
  );
}

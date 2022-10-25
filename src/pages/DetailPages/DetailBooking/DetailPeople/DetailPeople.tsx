import { Select, SelectProps, Space } from "antd";
import React, { useState } from "react";

type Props = {};

export default function DetailPeople({}: Props) {
  const [childCount, setChildCount] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);

  const handleCount = (type: string, count: number) => {
    switch (type) {
      case "adults": {
        setAdultsCount(adultsCount + count);
        break;
      }
      case "child": {
        setChildCount(childCount + count);
        break;
      }
      case "baby": {
        setBabyCount(babyCount + count);
        break;
      }
      default:
        break;
    }
  };
  
  

  return (
    <div className="mt-2  ">
      <h2 className="font-bold">Khách</h2>
      <div className="flex items-center justify-between mb-2">
        <div className="">
          <h2 className="font-medium">Người lớn</h2>
          <p>Từ 13 tuổi trở lên</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="w-6 h-6 rounded-full border flex items-center justify-center text-lg"
            onClick={() => {
              handleCount("adults", -1);
            }}
          >
            -
          </button>
          {adultsCount}
          <button
            className="w-6 h-6 rounded-full border flex items-center justify-center text-lg"
            onClick={() => {
              handleCount("adults", 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="">
          <h2 className="font-medium">Trẻ em</h2>
          <p>Độ tuổi 2 - 12</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="w-6 h-6 rounded-full border flex items-center justify-center text-lg"
            onClick={() => {
              handleCount("child", -1);
            }}
          >
            -
          </button>
          {childCount}
          <button
            className="w-6 h-6 rounded-full border flex items-center justify-center text-lg"
            onClick={() => {
              handleCount("child", 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="">
          <h2 className="font-medium">Em bé</h2>
          <p>Dưới 2 tuổi</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="w-6 h-6 rounded-full border flex items-center justify-center text-lg"
            onClick={() => {
              handleCount("baby", -1);
            }}
          >
            -
          </button>
          {babyCount}
          <button
            className="w-6 h-6 rounded-full border flex items-center justify-center text-lg"
            onClick={() => {
              handleCount("baby", 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

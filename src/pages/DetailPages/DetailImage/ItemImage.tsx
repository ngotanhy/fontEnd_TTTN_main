import React, { useState } from "react";
import { TiThSmall } from "react-icons/ti";
import { useAppSelector, useAppDispatch } from "../../../Hooks/HooksRedux";
import { modal } from "../../../redux/openModalReducer/OpenModalReducer";

type Props = {
  arrImage: { img: string }[];
  index: number;
};

export default function ItemImage({ arrImage, index }: Props) {
  // const {open} =useAppSelector(state => state.OpenModalReducer)
  const dispatch = useAppDispatch();
  return (
    <>
      {index === 4 ? (
        <button
          className="w-full h-full relative "
          onClick={() => {
            const action = modal(true);
            dispatch(action);
          }}
          style={{
            backgroundImage: `url(${arrImage[4].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            className="absolute right-8 bottom-5 bg-white py-1 px-3 text-base hover:bg-slate-100 rounded-lg border-black flex items-center"
            style={{ border: "1px solid black" }}
            onClick={() => {
              const action = modal(true);
              dispatch(action);
            }}
          >
            <TiThSmall className="mr-2 font-medium" />
            Hiện tất cả các ảnh
          </button>
        </button>
      ) : (
        <button
          className={`w-full h-full `}
          onClick={() => {
            const action = modal(true);
            dispatch(action);
          }}
          style={{
            backgroundImage: `url(${arrImage[0].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></button>
      )}
    </>
  );
}

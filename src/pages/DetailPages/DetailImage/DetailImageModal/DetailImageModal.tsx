import React from "react";

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'

import { BsHeart } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { GrFormPrevious } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from "../../../../Hooks/HooksRedux";
import { modal } from "../../../../redux/openModalReducer/OpenModalReducer";

type Props = {};

export default function DetailImageModal({}: Props) {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.OpenModalReducer);
  const { arrImage } = useAppSelector((state) => state.RoomReducer);

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: {
      size: open ? '100%' : '0',
      background: open ? 'white' : '',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? arrImage : [], {
    ref: transApi,
    trail: 400 / arrImage.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <div className=''>
    <animated.div
      style={{ ...rest, width: size, height: size }}
      className=''
      onClick={() => {
        const action = modal(false);
        dispatch(action);
      }}>
      {transition((style, item) => (
        <animated.div
          className=''
          style={{ ...style}}
        />
      ))}
    </animated.div>
  </div>
     
  );
}

{/* <div
className={`absolute left-0 w-full bg-slate-500 animate__animated ${
  open
    ? "opacity-1 z-10 "
    : "opacity-0 -z-10 h-0 hidden  animate__backOutDown"
}`}
style={{ top: "-128px" }}
>
<div className="container pt-6">
  <div className="flex justify-start font-medium text-lg">
    <button
      className="basis-2/3 text-xl"
      onClick={() => {
        const action = modal(false);
        dispatch(action);
      }}
    >
      <GrFormPrevious />
    </button>
    <div className="flex basis-1/3 justify-end gap-4">
      <div className="font-medium flex  items-center gap-1">
        <FiShare />
        <button className="underline underline-offset-1">
          {" "}
          Chia Se
        </button>
      </div>
      <div className="font-medium flex  items-center gap-1">
        <BsHeart />
        <button className="underline underline-offset-1">luu</button>
      </div>
    </div>
  </div>
  <div className="grid justify-items-center gap-3">
    {arrImage?.map((item, index) => {
      return (
        <div className="" key={index}>
          <img src={item.img} alt="..." className="object-cover" />
        </div>
      );
    })}
  </div>
</div>
</div> */}
import { BackTop } from "antd";
import React from "react";
import { TiArrowUpThick } from "react-icons/Ti";

type Props = {};
const style: React.CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

export default function BackToTop({}: Props) {
  return (
    <BackTop>
      <div style={style}>
        <TiArrowUpThick />
      </div>
    </BackTop>
  );
}

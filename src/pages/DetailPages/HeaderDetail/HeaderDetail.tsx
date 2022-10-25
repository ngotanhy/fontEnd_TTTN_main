import { Menu, MenuProps } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import useScroll from "../../../Hooks/UseScroll";

type Props = {};

const HeaderDetail = (props: Props) => {
  const scroll = useScroll();
  const items1: MenuProps["items"] = [
    { title: "Ảnh", path: "#" },
    { title: "Tiện nghi", path: "#" },
    { title: "Đánh giá", path: "#" },
  ].map((key) => ({
    key: key.title,
    label: key.title,
  }));
  return (
    <div
      className={
        scroll >= 540
          ? "fixed top-0 z-20 bg-white w-full h-5,75rem border-b-2"
          : "relative -z-10"
      }
    >
      <Header className="header container h-full bg-white p-0">
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            paddingTop: "27px",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        />
      </Header>
    </div>
    // </div>
  );
};

export default HeaderDetail;

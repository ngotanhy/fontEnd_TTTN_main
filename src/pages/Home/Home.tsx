import React from "react";
import { Pagination } from 'antd';


type Props = {};

export const Home = (props: Props) => {
  return <div>Home
    <Pagination defaultCurrent={1} total={50} />;
  </div>;
};

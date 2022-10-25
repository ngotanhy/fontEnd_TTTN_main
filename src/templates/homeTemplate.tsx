import React from "react";
import { Outlet } from "react-router-dom";
import PageFooter from "../Components/Footer/PageFooter";
import HeaderPage from "../Components/Header/HeaderPage";

type Props = {};

export default function HomeTemplate({}: Props) {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <PageFooter />
    </>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import PageFooter from "../components/Footer/PageFooter";
import HeaderPage from "../components/Header/headerPage";
// import HeaderPage from "../components/Header/HeaderPage";
import DetailImageModal from "../pages/DetailpPages/DetailImage/DetailImageModal/DetailImageModal";

type Props = {};

export default function HomeTemplate({}: Props) {
  return (
    <div className="relative">
      <HeaderPage />
      <Outlet />
      <PageFooter />
      <DetailImageModal />
    </div>
  );
}

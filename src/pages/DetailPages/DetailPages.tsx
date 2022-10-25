import React from "react";
import BackToTop from "../../components/BackToTop/BackToTop";
import ModalPopup from "../../HOC/ModalPopup";
import DetailImage from "./DetailImage/DetailImage";
import DetailImageModal from "./DetailImage/DetailImageModal/DetailImageModal";
import DetailInfoRoom from "./DetailInfo/DetailInfo";
import DetailReview from "./DetailReview/DetailReview";
import DetailTitle from "./DetailTitle/DetailTitle";
import DetailUser from "./DetaiUser/DetaiUser";
import HeaderDetail from "./HeaderDetail/HeaderDetail";

type Props = {};

export default function DetailPages({}: Props) {

  return (
    <div className="relative">
      <HeaderDetail />
      <div className="mt-28">
        <div className="container ">
          <DetailTitle />
          <DetailImage />
          <DetailInfoRoom />
          <DetailReview />
          {/* <DetailMap/> */}
          <DetailUser />
          <ModalPopup />
          <BackToTop />
        </div>
      </div>
    </div>
  );
}

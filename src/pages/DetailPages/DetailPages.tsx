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
  const arrImage: { img: string }[] = [
    {
      img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=720",
    },
  ];

  return (
    <div className="">
      <HeaderDetail />
      <div className="mt-4">
        <div className="container ">
          <DetailTitle />
          <DetailImage arrImage={arrImage} />
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

import React from "react";
import BackToTop from "../../components/BackToTop/BackToTop";
import DetailImage from "./DetailImage/DetailImage";
import DetailInfoRoom from "./DetailInfo/DetailInfo";
import DetailTitle from "./DetailTitle/DetailTitle";


type Props = {};

export default function DetailPages({}: Props) {
  const arrImage: { img: string }[] = [
    { img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" },
    { img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" },
    { img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" },
    { img: "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" },
    { img: "https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=720" },
  ];

  return (
    <>
      <div className="mt-32">
        <div className="container">
          <DetailTitle />
          <DetailImage arrImage={arrImage}/>
          <DetailInfoRoom/>
          <BackToTop/>
        </div>
      </div>
    </>
  );
}

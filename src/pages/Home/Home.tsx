import React from "react";
import { CarouselHeader } from "../../Components/Carousel/Carousel";
import CarouselSlick from "../../Components/Carousel/CarouselSlick";


type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <CarouselHeader />
      <CarouselSlick />
    </>
  );
}

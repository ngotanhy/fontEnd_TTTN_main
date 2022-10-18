import React from 'react';
import { Outlet } from 'react-router-dom';
import CarouselHeader from '../components/Carousel/Carousel';
import PageFooter from '../components/Footer/PageFooter';
import HeaderPage from '../components/Header/headerPage';





type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <>
    
    <HeaderPage />
    <CarouselHeader />
    <Outlet />
    <div>homeTemplate</div>
    <PageFooter />
    </>

  )
}
import React from 'react';
import CarouselBtnContainer from './CarouselBtnContainer';
import CarouselList from './CarouselList';

export default function CarouselContainer() {
  const carouselList = [
    { name: 'GLOW LIGHT', src: './carousel/carousel1.jpg' },
    { name: 'MY HOLIDAY MINT', src: './carousel/carousel2.jpg' },
    { name: 'SWEET LEMON', src: './carousel/carousel3.jpg' },
    { name: 'DEEP RED', src: './carousel/carousel4.jpg' },
    { name: 'OAT LATTE', src: './carousel/carousel5.jpg' },
    { name: '디저트에 커피를 더하다', src: './carousel/carousel6.jpg' },
    { name: '디저트 페어링', src: './carousel/carousel7.jpg' },
  ];

  return (
    <div className="carousel--container">
      <CarouselList carouselList={carouselList} />
      <CarouselBtnContainer carouselList={carouselList} />
    </div>
  );
}

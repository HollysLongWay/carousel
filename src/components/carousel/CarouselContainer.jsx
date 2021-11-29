import React from 'react';
import CarouselList from './CarouselList';

export default function CarouselContainer() {
  const carouselList = [
    { name: 'GLOW LIGHT', src: '/src/assets/carousel/carousel1.jpg' },
    { name: 'MY HOLIDAY MINT', src: '/src/assets/carousel/carousel2.jpg' },
    { name: 'SWEET LEMON', src: '/src/assets/carousel/carousel3.jpg' },
    { name: 'DEEP RED', src: '/src/assets/carousel/carousel4.jpg' },
    { name: 'OAT LATTE', src: '/src/assets/carousel/carousel5.jpg' },
    { name: '디저트에 커피를 더하다', src: '/src/assets/carousel/carousel6.jpg' },
    { name: '디저트 페어링', src: '/src/assets/carousel/carousel7.jpg' },
  ];

  return (
    <div className="visual">
      <CarouselList carouselList={carouselList} />
    </div>
  );
}

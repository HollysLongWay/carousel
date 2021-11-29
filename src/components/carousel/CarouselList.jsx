import React from 'react';
import CarouselItem from './CarouselItem';

export default function CarouselList({ carouselList }) {
  return (
    <ul className="visual">
      {carouselList.map(({ name, src }) => (
        <CarouselItem name={name} src={src} />
      ))}
    </ul>
  );
}

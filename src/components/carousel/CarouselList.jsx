import React from 'react';
import CarouselItem from './CarouselItem';

export default function CarouselList({ carouselList, slide }) {
  return (
    <ul className="carousel--list">
      {carouselList.map(({ name, src }, index) => (
        <CarouselItem
          key={src}
          role="carouselItem"
          index={index}
          slide={slide}
          src={src}
          name={name}
        />
      ))}
    </ul>
  );
}

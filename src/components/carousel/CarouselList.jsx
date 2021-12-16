import React from "react";
import CarouselItem, { MemoizedCarouselItem } from "./CarouselItem";

export default function CarouselList({ carouselList, slide }) {
  return (
    <ul className="carousel--list">
      {carouselList.map(({ name, src }, index) => (
        <MemoizedCarouselItem key={src} role="carouselItem" index={index} slide={slide} src={src} name={name} />
      ))}
    </ul>
  );
}

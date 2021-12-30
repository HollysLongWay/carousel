import React from "react";
import { MemoizedCarouselItem } from "./CarouselItem";

export default function CarouselList({ carouselList, slide }) {
  return (
    <ul className="carousel--list">
      {carouselList.map(({ name, src, desc }, index) => (
        <MemoizedCarouselItem
          key={src}
          role="carouselItem"
          slide={slide}
          name={name}
          src={src}
          desc={desc}
          index={index}
        />
      ))}
    </ul>
  );
}

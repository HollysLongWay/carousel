import React from "react";

export default function CarouselItem({ role, index, slide, src, name }) {
  console.log(1);
  return (
    <li className={`${index === slide ? "show" : ""} carousel--list__item`} key={src}>
      <a href="#" title={`${name} 바로가기`} aria-label={`${name} 바로가기`}>
        <picture>
          <source srcSet="" />
          <img src={src} alt={name} />
        </picture>
      </a>
    </li>
  );
}

export const MemoizedCarouselItem = React.memo(CarouselItem);

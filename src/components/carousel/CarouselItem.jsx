import React from "react";

export default function CarouselItem({ index, slide, src, name }) {
  return (
    <li className={`${index === slide ? "show" : ""} carousel--list__item`} key={src}>
      <a href="#" title={`${name} 바로가기`} aria-label={`${name} 바로가기`}>
        <picture>
          <source srcSet={`${src}.webop`} />
          <source srcSet={`${src}.png`} />
          <img src={`${src}.jpg`} alt={name} />
        </picture>
      </a>
    </li>
  );
}

export const MemoizedCarouselItem = React.memo(CarouselItem);

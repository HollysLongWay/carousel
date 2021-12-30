import React from "react";

export default function CarouselItem({ slide, name, src, desc, index }) {
  return (
    <li className={`${index === slide ? "show" : ""} carousel--list__item`} key={src}>
      <a href="#" title={`${name} 바로가기`} aria-label={`${name} 바로가기`}>
        <picture>
          <source srcSet={`${src}.webp`} />
          <source srcSet={`${src}.png`} />
          <img src={`${src}.jpg`} alt={name} />
        </picture>
      </a>
      {desc && (
        <div className="sr-only">
          <h2>{desc.h2}</h2>
          <p>{desc.p}</p>
        </div>
      )}
    </li>
  );
}

export const MemoizedCarouselItem = React.memo(CarouselItem);

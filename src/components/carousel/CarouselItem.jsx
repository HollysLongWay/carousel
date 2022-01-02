import React from "react";

export default function CarouselItem({ slide, name, src, desc, index }) {
  const { title, description } = desc;

  return (
    <li className={`${index === slide ? "show" : ""} carousel--list__item`} key={src}>
      {desc && (
        <div className="sr-only">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
      <a href="#" title={`${name} 바로가기`}>
        <picture>
          <source srcSet={`${src}.webp`} />
          <source srcSet={`${src}.png`} />
          <img src={`${src}.jpg`} alt={name} />
        </picture>
      </a>
    </li>
  );
}

export const MemoizedCarouselItem = React.memo(CarouselItem);

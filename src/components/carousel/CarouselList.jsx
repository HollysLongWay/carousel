import React from 'react';

export default function CarouselList({ carouselList, slide }) {
  return (
    <ul className="carousel--list">
      {carouselList.map(({ name, src }, index) => (
        <li className={`${index === slide ? 'show' : ''} carousel--list__item`} key={src}>
          <a href="#" title={`${name} 바로가기`} aria-label={`${name} 바로가기`}>
            <img src={src} alt={name} />
          </a>
        </li>
      ))}
    </ul>
  );
}

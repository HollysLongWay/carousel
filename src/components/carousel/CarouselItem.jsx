import React from 'react';

export default function CarouselItem({ role, index, slide, src, name }) {
  return role === 'carouselItem' ? (
    <li className={`${index === slide ? 'show' : ''} carousel--list__item`} key={src}>
      <a href="#" title={`${name} 바로가기`} aria-label={`${name} 바로가기`}>
        <picture>
          <source srcset="" />
          <img src={src} alt={name} />
        </picture>
      </a>
    </li>
  ) : (
    <li
      className={`${index === slide ? 'on' : ''} carousel--indicator`}
      aria-label={`${index + 1}번째 슬라이드 보기`}
      title={`${index + 1}번째 슬라이드 보기`}
    ></li>
  );
}

import React from 'react';

export default function CarouselItem({ name, src }) {
  return (
    <li className="visual__item">
      <a href="#" title={`${name} 바로가기`} aria-label={`${name} 바로가기`}>
        <img src={src} alt={name} />
      </a>
    </li>
  );
}

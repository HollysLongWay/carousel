import React, { useEffect, useRef } from 'react';

export default function CarouselItem({ name, src, slide }) {
  useEffect(() => {
    return () => {};
  }, []);

  const carouselLi = useRef(null);

  return (
    <li className="carousel--list__item" ref={carouselLi}>
      <a href="#" title={`${name} 바로가기`} aria-label={`${name} 바로가기`}>
        <img src={src} alt={name} />
      </a>
    </li>
  );
}

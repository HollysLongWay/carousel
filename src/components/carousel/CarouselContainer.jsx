import React, { useEffect, useRef, useState } from 'react';
import CarouselBtnContainer from './CarouselBtnContainer';
// import CarouselList from './CarouselList';
import CarouselItem from './CarouselItem';

export default function CarouselContainer() {
  const carouselList = [
    { name: 'GLOW LIGHT', src: './carousel/carousel1.jpg' },
    { name: 'MY HOLIDAY MINT', src: './carousel/carousel2.jpg' },
    { name: 'SWEET LEMON', src: './carousel/carousel3.jpg' },
    { name: 'DEEP RED', src: './carousel/carousel4.jpg' },
    { name: 'OAT LATTE', src: './carousel/carousel5.jpg' },
    { name: '디저트에 커피를 더하다', src: './carousel/carousel6.jpg' },
    { name: '디저트 페어링', src: './carousel/carousel7.jpg' },
  ];

  const [slide, setSlide] = useState(0);

  const clickPrev = () => {
    setSlide(slide - 1 < 0 ? slide - 1 : carouselList.length - 1);
  };

  const clickNext = () => {
    setSlide(slide + 1 > carouselList.length - 1 ? 0 : slide + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setSlide(slide + 1 > carouselList.length - 1 ? 0 : slide + 1);
    }, 3000);
    // return () => {
    //   cleanup
    // }
  }, [slide]);

  return (
    <div className="carousel--container">
      <ul className="carousel--list">
        {carouselList.map(({ name, src }, index) => (
          <li className={`${index === slide ? 'show' : ''} carousel--list__item`} key={src}>
            <a href="#" title={`${name} 바로가기`} aria-label={`${name} 바로가기`}>
              <img src={src} alt={name} />
            </a>
          </li>
        ))}
      </ul>
      <div className="carouselBtn-container">
        <button className="btn--prev"></button>
        <ul className="carousel--indicatorList">
          {carouselList.map((carousel, index) => (
            <li className={`${index === slide ? 'on' : ''} carousel--indicator`}></li>
          ))}
        </ul>
        <button className="btn--next"></button>
      </div>
    </div>
  );
}

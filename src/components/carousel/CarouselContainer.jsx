import React, { useEffect, useState } from 'react';
import CarouselBtnContainer from './CarouselBtnContainer';
// import CarouselList from './CarouselList';
import CarouselItem from './CarouselItem';
import CarouselList from './CarouselList';

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
  const [play, setPlay] = useState(true);

  const clickPrev = () => {
    setSlide(slide - 1 < 0 ? carouselList.length - 1 : slide - 1);
  };

  const clickNext = () => {
    setSlide(slide + 1 > carouselList.length - 1 ? 0 : slide + 1);
  };

  const clickPlay = () => {
    setPlay(!play);
  };

  useEffect(() => {
    let timer =
      play &&
      setTimeout(() => {
        setSlide(slide + 1 > carouselList.length - 1 ? 0 : slide + 1);
      }, 3000);
    return () => clearTimeout(timer);
  }, [slide, play, carouselList.length]);

  return (
    <div className="carousel--container">
      <CarouselList carouselList={carouselList} slide={slide} />
      <CarouselBtnContainer carouselList={carouselList} slide={slide} />
      <div className="carouselBtn-container">
        <button
          className="btn--prev"
          onClick={clickPrev}
          aria-label="이전 슬라이드 보기"
          title="이전 슬라이드 보기"
        ></button>
        <ul className="carousel--indicatorList">
          {carouselList.map((_, index) => (
            <li
              className={`${index === slide ? 'on' : ''} carousel--indicator`}
              aria-label={`${index + 1}번째 슬라이드 보기`}
              title={`${index + 1}번째 슬라이드 보기`}
            ></li>
          ))}
        </ul>
        <button
          className="btn--next"
          onClick={clickNext}
          aria-label="다음 슬라이드 보기"
          title="다음 슬라이드 보기"
        ></button>
        <button
          className={`${!play ? '' : 'pause'} btn--play`}
          onClick={clickPlay}
          aria-label={`슬라이드 ${!play ? '재생' : '정지'} 하기`}
          title={`슬라이드  ${!play ? '재생' : '정지'} 하기`}
        ></button>
      </div>
    </div>
  );
}

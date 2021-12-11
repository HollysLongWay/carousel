import React, { useCallback } from 'react';
import CarouselBtn from './CarouselBtn';
import CarouselItem from './CarouselItem';

export default function CarouselBtnContainer({ carouselList, slide, setSlide, play, setPlay }) {
  const clickPrev = useCallback(() => {
    setSlide(slide - 1 < 0 ? carouselList.length - 1 : slide - 1);
  }, [slide, carouselList.length]);

  const clickNext = useCallback(() => {
    setSlide(slide + 1 > carouselList.length - 1 ? 0 : slide + 1);
  }, [slide, carouselList.length]);

  const clickPlay = useCallback(() => {
    setPlay(!play);
  }, [play]);

  return (
    <div className="carouselBtn-container">
      <CarouselBtn onClick={clickPrev} role="carouselMove" direct="prev" />
      <ul className="carousel--indicatorList">
        {carouselList.map(({ src }, index) => (
          <CarouselItem key={src + index} role="carouselIndicator" index={index} slide={slide} />
        ))}
      </ul>
      <CarouselBtn onClick={clickNext} role="carouselMove" direct="next" />
      <CarouselBtn onClick={clickPlay} role="carouselPlay" play={play} />
    </div>
  );
}

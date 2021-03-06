import React, { useCallback } from "react";
import CarouselBtn from "./CarouselBtn";
import { MemoizedCarouselIndicator } from "./CarouselIndicator";
import CarouselItem from "./CarouselItem";

export default function CarouselBtnContainer({ carouselList, slide, setSlide, play, setPlay }) {
  const clickPrev = useCallback(() => {
    setSlide(slide - 1 < 0 ? carouselList.length - 1 : slide - 1);
  }, [slide]);

  const clickNext = useCallback(() => {
    setSlide(slide + 1 > carouselList.length - 1 ? 0 : slide + 1);
  }, [slide]);

  const clickPlay = useCallback(() => {
    setPlay(!play);
  }, [play]);

  return (
    <div className="carouselBtn-container">
      <CarouselBtn onClick={clickPrev} role="carouselMove" direct="prev" />
      <ul className="carousel--indicatorList">
        {carouselList.map(({ src }, index) => (
          <MemoizedCarouselIndicator key={src + index} index={index} slide={slide} />
        ))}
      </ul>
      <CarouselBtn onClick={clickNext} role="carouselMove" direct="next" />
      <CarouselBtn onClick={clickPlay} role="carouselPlay" play={play} />
    </div>
  );
}

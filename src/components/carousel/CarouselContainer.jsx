import React, { useEffect, useState } from "react";
import CarouselBtnContainer from "./CarouselBtnContainer";
import CarouselList from "./CarouselList";

export default function CarouselContainer() {
  const carouselList = [
    { name: "GLOW LIGHT", src: "./carousel/carousel1" },
    { name: "MY HOLIDAY MINT", src: "./carousel/carousel2" },
    { name: "SWEET LEMON", src: "./carousel/carousel3" },
    { name: "DEEP RED", src: "./carousel/carousel4" },
    { name: "OAT LATTE", src: "./carousel/carousel5" },
    { name: "디저트에 커피를 더하다", src: "./carousel/carousel6" },
    { name: "디저트 페어링", src: "./carousel/carousel7" }
  ];

  const [slide, setSlide] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    let timer =
      play &&
      setTimeout(() => {
        setSlide(slide + 1 > carouselList.length - 1 ? 0 : slide + 1);
      }, 3000);
    return () => clearTimeout(timer);
  }, [slide, play]);

  return (
    <div className="carousel--container">
      <CarouselList carouselList={carouselList} slide={slide} />
      <CarouselBtnContainer
        carouselList={carouselList}
        slide={slide}
        setSlide={setSlide}
        play={play}
        setPlay={setPlay}
      />
    </div>
  );
}

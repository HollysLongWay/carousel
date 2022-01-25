import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CarouselItem2 from "./CarouselItem2";
import CarouselIndic2 from "./CarouselIndic2";

function Carousel2() {
  const slide = {
    id: "test-carousel",
    label: "[테스트] OO용품 슬라이드 배너",
    activeIndex: 0,
    activeClass: "is--active",
    classes: {
      list: ".carousel__list",
      item: ".carousel__item",
      indicator: ".carousel__indicator"
    },
    autoPlay: true
  };

  const carouselList = [
    {
      name: "GLOW LIGHT",
      src: "./img/carousel2/houseware-dandruff.jpg"
    },
    {
      name: "MY HOLIDAY MINT",
      src: "./img/carousel2/houseware-downy.jpg"
    },
    {
      name: "SWEET LEMON",
      src: "./img/carousel2/kitchenware-lunchbox.jpg"
    },
    {
      name: "DEEP RED",
      src: "./img/carousel2/kitchenware-tumbler.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let timer =
      autoPlay &&
      setTimeout(() => {
        setActiveIndex(activeIndex + 1 > carouselList.length - 1 ? 0 : activeIndex + 1);
      }, 3000);
    return () => clearTimeout(timer);
  }, [activeIndex, autoPlay]);

  const onClick = ({ target }) => {
    if (!target.classList.contains("carousel--indicator")) return;
    setActiveIndex(+target.dataset.index);
  };

  return (
    <div className="carousel--wrap">
      <ul className="carousel--item--wrap">
        {carouselList.map(({ src }, index) => (
          <CarouselItem2 activeIndex={activeIndex} src={src} index={index} key={src} />
        ))}
      </ul>
      <ul className="carousel--indicator--wrap" onClick={onClick}>
        {carouselList.map(({ src }, index) => (
          <CarouselIndic2 activeIndex={activeIndex} index={index} key={src + index} />
        ))}
        <button>
          <img src="./img/carousel2/toggleBtn.png" alt="" />
        </button>
      </ul>
      <div className="carousel--controller"></div>
    </div>
  );
}
export default Carousel2;

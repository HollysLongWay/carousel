import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import CarouselItem2 from "./CarouselItem2";
import CarouselIndic2 from "./CarouselIndic2";
import MoveBtn from "./MoveBtn";
import PlayBtn from "./PlayBtn ";

function Carousel2() {
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

  const clickIndicator = ({ target }) => {
    if (!target.matches(".carousel--indicator")) return;
    setActiveIndex(+target.dataset.index);
  };

  const clickPlayBtn = ({ target }) => {
    if (!target.matches(".carousel--playBtn img")) return;
    target.classList.toggle("is--paused");
    setAutoPlay(!autoPlay);
  };

  const isOverMoveBtn = ({ currentTarget }) => {
    currentTarget.classList.toggle("is--showing");
  };

  const clicPrevBtn = () => {
    setActiveIndex(activeIndex - 1 < 0 ? carouselList.length - 1 : activeIndex - 1);
  };

  const clicNextBtn = () => {
    setActiveIndex(activeIndex + 1 > carouselList.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="carousel--wrap">
      <MoveBtn direct="Prev" hoverEvent={isOverMoveBtn} clickEvent={clicPrevBtn} />
      <ul className="carousel--item--wrap">
        {carouselList.map(({ src }, index) => (
          <CarouselItem2 activeIndex={activeIndex} src={src} index={index} key={src} />
        ))}
      </ul>
      <MoveBtn direct="Next" hoverEvent={isOverMoveBtn} clickEvent={clicNextBtn} />
      <div className="carousel--contoller--wrap">
        <ul className="carousel--indicator--wrap" onClick={clickIndicator}>
          {carouselList.map(({ src }, index) => (
            <CarouselIndic2 activeIndex={activeIndex} index={index} key={src + index} />
          ))}
        </ul>
        <PlayBtn clickEvent={clickPlayBtn} />
      </div>
    </div>
  );
}

export default Carousel2;

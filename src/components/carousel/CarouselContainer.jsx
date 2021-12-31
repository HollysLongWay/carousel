import React, { useEffect, useState } from "react";
import CarouselBtnContainer from "./CarouselBtnContainer";
import CarouselList from "./CarouselList";

export default function CarouselContainer() {
  const carouselList = [
    {
      name: "GLOW LIGHT",
      src: "./carousel/carousel1",
      desc: {
        title: "일상의 순간을 다채롭게 GLOW LIGHT",
        description: "15000원 이상 구매시 29000원 2021년 11월 26일 금요일 출시"
      }
    },
    {
      name: "MY HOLIDAY MINT",
      src: "./carousel/carousel2",
      desc: { title: "향긋한 민트가 퍼지다 MY HOLIDAY MINT", description: "민트 초코칩 케이크" }
    },
    {
      name: "SWEET LEMON",
      src: "./carousel/carousel3",
      desc: { title: "제주의 따스함이 느껴지는 SWEET LEMON", description: "제주 레몬 사과차" }
    },
    {
      name: "DEEP RED",
      src: "./carousel/carousel4",

      desc: { title: "겨울을 빨갛게 물들이는 DEEP RED", description: "타트 체리 스무디, 레드벨벳 뚱카롱" }
    },
    {
      name: "OAT LATTE",
      src: "./carousel/carousel5",

      desc: { title: "마음을 따뜻하게 채워주는 OAT LATTE", description: "우리 곡물 라떼, 바닐라 오트 라떼" }
    },
    {
      name: "디저트에 커피를 더하다",
      src: "./carousel/carousel6",

      desc: {
        title: "디저트에 커피를 더하다 오늘을 즐기다",
        description: "카페 아메리카노, 촉촉한 당근케이크, 더블 베리 바스크 치즈 케이크"
      }
    },
    {
      name: "디저트 페어링",
      src: "./carousel/carousel7",
      desc: { title: "디저트 페어링", description: "카페 아메리카노, 카페 라떼, 진한 마스카포네 티라미스" }
    }
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

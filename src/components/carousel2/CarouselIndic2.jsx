import React from "react";

export default function CarouselIndic2({ activeIndex, index, onClick }) {
  return (
    <li
      className={`${activeIndex === index ? "is--active" : ""} carousel--indicator`}
      aria-label={`${index + 1}번째 슬라이드 보기`}
      title={`${index + 1}번째 슬라이드 보기`}
      data-index={index}
    ></li>
  );
}

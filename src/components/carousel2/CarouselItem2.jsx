import React from "react";

export default function CarouselItem2({ activeIndex, src, index }) {
  return (
    <li className={`${activeIndex === index ? "is--active" : ""} carousel__item`}>
      <a href="#" title="상품 바로가기">
        <img src={src} alt="상품 바로가기" />
      </a>
    </li>
  );
}

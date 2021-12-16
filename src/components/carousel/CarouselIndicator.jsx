import React from "react";

export default function CarouselIndicator({ index, slide }) {
  console.log(2);
  return (
    <li
      className={`${index === slide ? "on" : ""} carousel--indicator`}
      aria-label={`${index + 1}번째 슬라이드 보기`}
      title={`${index + 1}번째 슬라이드 보기`}
    ></li>
  );
}

export const MemoizedCarouselIndicator = React.memo(CarouselIndicator);

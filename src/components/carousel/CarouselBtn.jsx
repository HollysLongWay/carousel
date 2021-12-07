import React from 'react';

export default function CarouselBtnContainer({ carouselList, slide }) {
  return (
    <button
      className="btn--next"
      onClick={clickNext}
      aria-label="다음 슬라이드 보기"
      title="다음 슬라이드 보기"
    ></button>
  );
}

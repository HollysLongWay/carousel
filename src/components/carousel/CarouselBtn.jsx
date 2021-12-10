import React from 'react';

export default function CarouselBtn({ onClick, role, direct, play }) {
  return role === 'carouselMove' ? (
    <button
      className={`btn--${direct === 'next' ? 'next' : 'prev'}`}
      onClick={onClick}
      aria-label={`${direct === 'next' ? '다음' : '이전'} 슬라이드 보기`}
      title={`${direct === 'next' ? '다음' : '이전'} 슬라이드 보기`}
    ></button>
  ) : (
    <button
      className={`${!play ? '' : 'pause'} btn--play`}
      onClick={onClick}
      aria-label={`슬라이드 ${!play ? '재생' : '정지'} 하기`}
      title={`슬라이드  ${!play ? '재생' : '정지'} 하기`}
    ></button>
  );
}

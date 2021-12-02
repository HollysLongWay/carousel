import React from 'react';
import Carouselndicator from './Carouselndicator';

export default function CarouselBtnContainer({ carouselList }) {
  return (
    <div className="carouselBtn-container">
      <button className="btn--prev"></button>
      <ul className="carousel--indicatorList">
        {carouselList.map((carousel, index) => (
          <Carouselndicator order={index} />
        ))}
      </ul>
      <button className="btn--next"></button>
    </div>
  );
}

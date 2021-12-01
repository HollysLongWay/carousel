import React from 'react';
import Carouselndicator from './Carouselndicator';

export default function CarouselBtnContainer({ carouselList }) {
  return (
    <div className="carouselBtn-container">
      <ul className="carousel--indicatorList">
        {carouselList.map((carousel, index) => (
          <Carouselndicator order={index} />
        ))}
      </ul>
    </div>
  );
}

import { forwardRef } from 'react';

const Carousel = forwardRef(({ images, onTransitionEnd: handleTransitionEnd, currentSlide, duration }, ref) => {
  return (
    <div
      style={{
        '--duration': duration,
        '--currentSlide': currentSlide,
      }}
      className="carousel-slides"
      ref={ref}
      onTransitionEnd={() => handleTransitionEnd(images)}
    >
      {[images[images.length - 1], ...images, images[0]].map(
        ({ url, label }, index) => (
          <img key={url + label + index} src={url} alt={label} />
        )
      )}
    </div>
  );
});

export { Carousel };

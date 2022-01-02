import image01url from '../src/assets/movies/movie-1.jpg';
import image02url from '../src/assets/movies/movie-2.jpg';
import image03url from '../src/assets/movies/movie-3.jpg';
import image04url from '../src/assets/movies/movie-4.jpg';
import './App.css';
import { Carousel, ControlButton } from './components';
import { useCallback, useState, useEffect, useRef } from 'react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [duration] = useState(1000);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = ({ target }) => {
    // prev 버튼이 클릭되면 currentSlide를 -1하고 next 버튼이 클릭되면 currentSlide를 +1한다.
    const delta = target.classList.contains('prev') ? -1 : 1;
    setCurrentSlide(currentSlide + delta);
  };

  const handleTransitionEnd = (images) => {
    const delta =
      currentSlide === 0 ? 1 : currentSlide === images.length + 1 ? -1 : 0;
    if (!delta) return;
    setCurrentSlide(currentSlide + images.length * delta);
  };

  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  // 맨 처음 mount 되었을 때 offsetWidth를 받아서 width 지정한 이후 opacity 1로.
  useEffect(() => {
    const { offsetWidth } = carouselRef.current.querySelector('img');
    containerRef.current.style.width = offsetWidth;

    setCurrentSlide(currentSlide + 1);
    containerRef.current.style.opacity = 1;
  }, []);

  return (
    <>
      <form onChange={()=> {
        setIsChecked(!isChecked);
      }}>
        <label htmlFor="overflow">
          carousel <b>overflow: hidden</b>
        </label>
        <input type="checkbox" id="overflow" checked={isChecked} />
      </form>
      <div className={`carousel ${isChecked? 'hiddenOverflow':''}`.trim()} ref={containerRef}>
        <Carousel
          images={[
            { url: image01url, label: '테스트1' },
            { url: image02url, label: '테스트2' },
            { url: image03url, label: '테스트3' },
            { url: image04url, label: '테스트4' },
          ]}
          ref={carouselRef}
          currentSlide={currentSlide}
          duration={duration}
          onTransitionEnd={handleTransitionEnd}
        />
        <ControlButton direction="prev" onClick={handleClick} />
        <ControlButton direction="next" onClick={handleClick} />
      </div>
    </>
  );
}

export default App;

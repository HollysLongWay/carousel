import CarouselContainer from "./components/carousel/CarouselContainer";
import Carousel2 from "./components/carousel2/Carousel2";
import TodoList from "./components/todos/TodoList";
import "./scss/App.scss";

function App() {
  return (
    <div className="todos">
      <main>
        {/* <CarouselContainer /> */}
        {/* <TodoList /> */}
        <Carousel2 />
      </main>
    </div>
  );
}

export default App;

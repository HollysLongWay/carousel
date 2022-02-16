import CarouselContainer from "./components/carousel/CarouselContainer";
import Carousel2 from "./components/carousel2/Carousel2";
import TodoList from "./components/todos/TodoList";
import "./scss/App.scss";
import ShoppingMall from "./components/shoppingMall/ShoppingMall";

function App() {
  return (
    <div className="todos">
      <main>
        {/* <CarouselContainer /> */}
        {/* <TodoList /> */}
        {/* <Carousel2 /> */}
        <ShoppingMall />
      </main>
    </div>
  );
}

export default App;

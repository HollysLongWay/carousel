import { HashRouter } from "react-router-dom";

import CarouselContainer from "./components/carousel/CarouselContainer";
import Carousel2 from "./components/carousel2/Carousel2";
import TodoList from "./components/todos/TodoList";
import "./scss/App.scss";
import ShoppingMall from "./components/shoppingMall/ShoppingMall";
import Button from "components/buttons/Button";
import ButtonContainer from "components/buttons/ButtonContainer";

function App() {
  return (
    <HashRouter>
      <main>
        {/* <CarouselContainer /> */}
        {/* <TodoList /> */}
        {/* <Carousel2 /> */}
        {/* <ShoppingMall /> */}
        <ButtonContainer />
      </main>
    </HashRouter>
  );
}

export default App;

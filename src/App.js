import { HashRouter } from "react-router-dom";

import CarouselContainer from "./components/carousel/CarouselContainer";
import Carousel2 from "./components/carousel2/Carousel2";
import TodoList from "./components/todos/TodoList";
import "./scss/App.scss";
import ShoppingMall from "./components/shoppingMall/ShoppingMall";
import Button from "components/buttons/Button";

function App() {
  return (
    <HashRouter>
      <main>
        {/* <CarouselContainer /> */}
        {/* <TodoList /> */}
        {/* <Carousel2 /> */}
        {/* <ShoppingMall /> */}
        <Button state="upload" />
        <Button state="uploading" />
        <Button state="complete" />
        <Button state="fail" />
        <Button state="disable" />
      </main>
    </HashRouter>
  );
}

export default App;

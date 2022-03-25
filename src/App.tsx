import { HashRouter } from "react-router-dom";

import CarouselContainer from "./components/carousel/CarouselContainer";
import Carousel2 from "./components/carousel2/Carousel2";
import TodoList from "./components/todos/TodoList";
import "./scss/App.scss";
import ShoppingMall from "./components/shoppingMall/ShoppingMall";
import Button from "components/buttons/Button";
import ButtonContainer from "components/buttons/ButtonContainer";
import PurchaseView from "components/purchase/PurchaseView/PurchaseView";

function App() {
  const product = {
    name: "래피젠 코로나 자가 검사 키트",
    option: " 2개입X1박스",
    discountRate: 88,
    price: 56760
  };

  return (
    <HashRouter>
      <main>
        {/* <CarouselContainer /> */}
        {/* <TodoList /> */}
        {/* <Carousel2 /> */}
        {/* <ShoppingMall /> */}
        {/* <ButtonContainer /> */}
        <PurchaseView product={product} />
      </main>
    </HashRouter>
  );
}

export default App;

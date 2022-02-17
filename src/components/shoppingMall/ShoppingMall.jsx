import React from "react";

import Header from "./Header";
import ItemList from "./ItemList";

const items = [
  {
    title: "랄켈라 베이직 부츠",
    content: "FW시즌 필수 아이템! 착-붙는 핏의 부츠를 만나보세요",
    imageUrl: process.env.PUBLIC_URL + "/img/shoppingMall/image1.png"
  },
  {
    title: "폭닥폭닥 스니커즈",
    content: "따뜻하면서 예쁜 다리라인을 원한다면 폭닥폭닥 키높이 스니커즈",
    imageUrl: process.env.PUBLIC_URL + "/img/shoppingMall/image2.png"
  },
  {
    title: "폭닥폭닥 스니커즈",
    content: "따뜻하면서 예쁜 다리라인을 원한다면 폭닥폭닥 키높이 스니커즈",
    imageUrl: process.env.PUBLIC_URL + "/img/shoppingMall/image3.png"
  }
];

export const ItemContext = React.createContext();

const ShoppingMall = () => {
  return (
    <div className="shoppingMall">
      <Header />
      <ItemContext.Provider value={items}>
        <ItemList />
      </ItemContext.Provider>
    </div>
  );
};

export default ShoppingMall;

import React, { useContext } from "react";

import Item from "./Item";
import { ItemContext } from "./ShoppingMall";

const ItemList = () => {
  const items = useContext(ItemContext);

  return (
    <ul className="item-list">
      {items.map(item => (
        <Item {...item} />
      ))}
    </ul>
  );
};

export default ItemList;

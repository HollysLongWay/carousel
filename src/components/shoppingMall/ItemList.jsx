import React, { memo, useContext } from "react";

import { MemoItem } from "./Item";
import { ItemContext } from "./ShoppingMall";

const ItemList = () => {
  const items = useContext(ItemContext);

  return (
    <ul className="item-list">
      {items.map(item => (
        <MemoItem {...item} />
      ))}
    </ul>
  );
};

export const MemoItemList = memo(ItemList);

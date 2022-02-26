import React, { memo, useContext } from "react";

import { MemoItem } from "./Item";
import { ItemContext } from "./ShoppingMall";

const ItemList = () => {
  const items = useContext(ItemContext);

  if (!items) return null;

  return (
    <ul className="item-list">
      {items.map(item => (
        <MemoItem key={`${item.id}`} {...item} />
      ))}
    </ul>
  );
};

export const MemoItemList = memo(ItemList);

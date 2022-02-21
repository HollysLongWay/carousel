import { memo } from "react";

const Item = ({ title, content, imageUrl }) => {
  return (
    <li className="item">
      <div className="text__wrapper">
        <h3 className="item__title">{title}</h3>
        <p className="item__content">{content}</p>
      </div>
      <img className="item__img" src={imageUrl} alt={`${title} 상품 이미지`} />
    </li>
  );
};

export const MemoItem = memo(Item);

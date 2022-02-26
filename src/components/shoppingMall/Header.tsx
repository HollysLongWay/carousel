import { memo } from "react";
import { Link } from "react-router-dom";

import { MemoButton } from "./Button";

const Header = () => {
  return (
    <header className="ShoppingMallHeader">
      <Link to="/">More</Link>
      <div className="button__wrapper">
        <MemoButton label="장바구니" />
        <MemoButton label="햄버거" />
      </div>
    </header>
  );
};

export const MemoHeader = memo(Header);

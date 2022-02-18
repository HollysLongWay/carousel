import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="ShoppingMallHeader">
      <Link to="/">More</Link>
      <div className="button__wrapper">
        <Button label="장바구니" />
        <Button label="햄버거" />
      </div>
    </header>
  );
};

export default Header;

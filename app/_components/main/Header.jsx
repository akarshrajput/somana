import React from "react";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="flex flex-col px-40 py-2">
      <div className="flex items-center">
        <Logo />
        <HeaderNav />
      </div>
      <div className="self-center">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;

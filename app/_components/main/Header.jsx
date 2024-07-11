import React from "react";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="flex flex-col px-4 py-2">
      <div className="grid grid-cols-3">
        <Logo />
        <div className="self-center justify-self-center ">
          <Navigation />
        </div>
        <HeaderNav />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="flex bg-stone-950 flex-col px-4 py-4">
      <div className="grid grid-cols-3">
        <div className="w-fit">
          <Logo />
        </div>
        <div className="self-center justify-self-center ">
          <Navigation />
        </div>
        <HeaderNav />
      </div>
    </div>
  );
};

export default Header;
